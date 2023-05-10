import express from "express";
import authRoutes from "./routes/auth.js";
import cors from "cors";
const app = express();
const port = 8800;
app.set("view engine", "ejs");

// Middleware configuration
// origin: "http://localhost:3000"
// origin: "https://whatsbulk.vercel.app"

app.use(express.json()); // parses incoming requests with JSON payloads

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  return res.status(200).json("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
