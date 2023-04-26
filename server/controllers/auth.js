import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import randomstring from "randomstring";
import nodemailer from "nodemailer";

const register = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // CHECK FOR EXISTING USER
  const q = "SELECT * FROM login WHERE email = ? or name = ?";

  db.query(q, [req.body.email, req.body.username], (error, data) => {
    if (error) return res.json(error);
    if (data.length)
      return res
        .status(422)
        .json({ status: 0, message: "User already exists!" });

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    // return false;
    const q = "INSERT INTO login (email, name, password) VALUES (?)";
    const values = [req.body.email, req.body.username, hashedPassword];

    db.query(q, [values], (error, data) => {
      console.log(data);
      if (error) return res.json(error);

      const query = "SELECT * FROM login WHERE id = ?";

      db.query(query, [data.insertId], (error, signInData) => {
        if (error) return res.json(error);

        const token = jwt.sign({ id: signInData[0].id }, "jwtkey");
        const { password, ...rest } = signInData[0];

        return res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ status: 1, data: rest, message: "User has been created!" });
      });
    });
  });
};

const login = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // CHECK USER EXISTS

  const q = "SELECT * FROM login WHERE email = ?";
  try {
    db.query(q, [req.body.email], (error, data) => {
      if (error) return res.json(error);

      if (data.length === 0)
        return res.status(404).json({ status: 0, message: "User not found!" });

      // CHECK PASSWORD
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
      9;
      if (!isPasswordCorrect) {
        return res.status(400).json({ status: 0, message: "Wrong Password!" });
      }

      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...rest } = data[0];

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ status: 1, data: rest, message: "Login successful!" });
    });
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, res) => {
  res
    .clearCookie("access_token")
    .status(200)
    .json({ status: 1, message: "Logout successful!" });
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "tarequl.islalm@gmail.com",
    pass: "@%@dev-dev#@%@trk",
  },
});

const resetPassword = (req, res) => {
  const { email } = req.body;
  const token = randomstring.generate();
  console.log(token);
  const resetLink = `http://localhost:3000/reset-password?token=${token}`;

  const mailOptions = {
    from: "whatsbulk.com",
    to: `${email}`,
    subject: "Password Reset Request",
    html: `<p>You requested a password reset for your account. Click the link below to reset your password:</p><p><a href="${resetLink}">${resetLink}</a></p>`,
  };
  db.query(
    "SELECT * FROM login where email = ? limit 1",
    email,
    function (err, data) {
      console.log(data);
      if (err) {
        return res.status(400).json({ message: err });
      }
      if (data.length > 0) {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        db.query(
          `INSERT INTO password_reset (email, token) VALUES(${db.escape(
            email
          )},'${token}')`
        );
        return res.status(200).send({ message: "Mail sent Successfuly" });
      }
      return res.status(401).send({ message: "Email not exist" });
    }
  );
};

export { register, login, logout, resetPassword };
