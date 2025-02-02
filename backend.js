const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("image"), (req, res) => {
  const { category } = req.body;
  const imageUrl = `/uploads/${req.file.filename}`;
  // Save to database
  res.json({ success: true, imageUrl });
});

app.get("/combinations", (req, res) => {
  // Fetch clothes from database and generate combinations
  res.json({ combinations: [] });
});

app.listen(3000, () => console.log("Server running on port 3000"));