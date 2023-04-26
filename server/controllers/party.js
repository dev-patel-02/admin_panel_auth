import { db } from "../db.js";
import { validationResult } from "express-validator";

const makeUniqueCode = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

const addParty = (req, res) => {
  // server side validation if fails then return with proper error message

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const code = req.body.name
    .split(" ")
    .map((item) => item.charAt(0))
    .join("")
    .toUpperCase();
  const uniqueCode = makeUniqueCode(4);
  const clientCode = code + uniqueCode;

  const q = `INSERT INTO parties (code, name, address_1, address_2, city, state, contact_person, phone, mobile, email, website, gst_no, fuel_charge, is_cash, status, created_at, updated_at) VALUES (?)`;

  const values = [
    clientCode,
    req.body.name,
    req.body.address_1,
    req.body.address_2,
    req.body.city,
    req.body.state,
    req.body.contact_person,
    req.body.phone,
    req.body.mobile,
    req.body.email,
    req.body.website,
    req.body.gst_no,
    req.body.fuel_charge,
    req.body.party_type,
    1,
    new Date(),
    new Date(),
  ];

  // Store data in database
  try {
    db.query(q, [values], (errors, results) => {
      // If error then return with proper error message
      if (errors) return res.json(errors);

      // Else send success message
      return res
        .status(200)
        .json({ status: 1, data: results, message: "Party Added!" });
    });
  } catch (err) {
    return res.status(500).json({ status: 0, message: err.message });
  }
};

const updateParty = (req, res) => {
  // server side validation if fails then return with proper error message

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // Find if party is available or not

  const id = req.params.id;
  const q = `SELECT * FROM parties WHERE id = ?`;
  db.query(q, [id], (error, result) => {
    if (error) return res.json(error);

    if (result.length > 0) {
      
      const { name, address_1, address_2, city, state, contact_person, phone, mobile, email, website, gst_no, fuel_charge, party_type } = req.body;

      const query = `UPDATE parties SET name = ?, address_1 = ?, address_2 = ?, city = ?, state = ?, contact_person = ?, phone = ?, mobile = ?, email = ?, website = ?, gst_no = ?, fuel_charge = ?, is_cash = ?, updated_at = ? WHERE id = ?`;  

      const values = [
        name,
        address_1,
        address_2,
        city,
        state,
        contact_person,
        phone,
        mobile,
        email,
        website,
        gst_no,
        fuel_charge,
        party_type,
        new Date(), 
        id
      ];

      try {
        // Update data in database

        db.query(query,values, function(error, results) {
          if(error) return res.json(error);

          return res
          .status(200)
          .json({ status: 1, data: results, message: "Party Updated!" });
        })

      } catch (errors) {  
        console.log(errors); 
      }
    }else{
      return res.status(200).json({ status: 0, message: "No Party found!" });
    }
  });


};

const getParties = (req, res) => {
  // 1. run query in db
  // 2. if found then make remove unnecessary keys and return data in api
  // 3. If not found, then return empty with message

  const q = `SELECT id,name,contact_person,mobile,email FROM parties where id > 68 order by id desc`;
  db.query(q, (error, result) => {
    if (error) return res.json(error);

    if (result.length > 0) {
      return res
        .status(200)
        .json({ status: 1, data: result, message: "List of parties" });
    }

    return res.status(200).json({ status: 0, message: "No Party found!" });
  });
};

const getParty = (req, res) => {
  // 1. run query in db with particular id
  // 2. If party found then return data with message
  // 3. If party not found then return empty with message
  const id = req.params.id;
  const q = `SELECT * FROM parties WHERE id = ?`;
  db.query(q, [id], (error, result) => {
    if (error) return res.json(error);

    if (result.length > 0) {
      return res
        .status(200)
        .json({ status: 1, data: result, message: "Party found!" });
    }

    return res.status(200).json({ status: 0, message: "No Party found!" });
  });
};

export { addParty, getParties, getParty, updateParty };
