/**
 * 날짜 : 2023/05/22
 * 이름 : 공민혁
 * 내용 : Express 실습하기 - jsp 와 비슷함
 */
const express = require("express");
const app = express();

// template Engin 설정
app.set("views", __dirname + "/views"); // __dirname - 상수
app.set("view engine", "ejs");
// route 설정
app.get("/", (req, res) => {
  //res.send("app...");
  const data = {
    tit1: "Node.js Exporess",
    tit2: "EJS Template Engine",
    result1: true,
    result2: false,
    score: 86,
    user: {
      uid: "a101",
      name: "홍길동",
      hp: "010-1234-2422",
      age: 21,
    },

    users: [
      { uid: "p101", name: "김유신", hp: "010-1234-1001", age: 23 },
      { uid: "p102", name: "김춘추", hp: "010-1234-1002", age: 25 },
      { uid: "p103", name: "장보고", hp: "010-1234-1003", age: 31 },
      { uid: "p104", name: "강감찬", hp: "010-1234-1004", age: 22 },
      { uid: "p105", name: "이순신", hp: "010-1234-1005", age: 53 },
    ],
  };
  res.render("index", data);
});

app.get("/sub/hello", (req, res) => {
  res.send("sub/hello...");
});

app.get("/sub/welcome", (req, res) => {
  res.send("sub/welcome...");
});

app.get("/sub/greeting", (req, res) => {
  res.send("sub/greeting...");
});

app.listen(3000, () => {
  console.log("3000 실행 중...");
});
