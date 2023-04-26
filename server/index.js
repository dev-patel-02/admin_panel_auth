import express from "express";
import authRoutes from "./routes/auth.js";
import partyRoutes from "./routes/party.js";
import cors from "cors";
import { db } from "./db.js"; 

const app = express();
const port = 8800;

// Middleware configuration
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/party",partyRoutes);

app.get("/api/search", (req, res) => {
  const searchTerm = req.query.term;

  const q = `SELECT bookings.id, bookings.doc_number, bookings.date, bookings.receiver, bookings.center,bookings.weight, bookings.g_amount, bookings.type, parties.name as party_name 
  FROM bookings 
  JOIN parties ON bookings.party_id = parties.id
  WHERE bookings.doc_number = ?`;

  db.query(q, [searchTerm], (error, data) => {
    if (error) return res.json(error);

    res.status(200).json({ status: 1, data: data, message: "" });
  });
});
app.get("/", (req, res) => {
  return res.status(200).json("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
