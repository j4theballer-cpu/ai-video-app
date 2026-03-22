const express = require("express");
const cors = require("cors");
const { execSync } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/generate", (req, res) => {
  const output = "public/output.mp4";

  execSync(`ffmpeg -f lavfi -i color=c=black:s=720x1280 -t 5 ${output}`);

  res.json({ video: "https://YOUR-BACKEND.onrender.com/output.mp4" });
});

app.listen(5000);
