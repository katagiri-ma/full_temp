const express = require("express");
const app = express();
const cors = require("cors");

// bodyがgetできる
const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// サーバーが立ち上がった状態でフロントを立ち上げる
app.use("/", express.static("./dist"));

// // ファイルを分けたい時
// app.use("/api/task", taskRoute);

// // 動作確認
app.get("/", (req, res) => {
  res.send("Hello express");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
