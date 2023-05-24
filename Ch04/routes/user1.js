var express = require("express");
const User1 = require("../schemas/user1");
const router = express.Router();

router.get("/list", async (req, res) => {
  const data = await User1.find({ uid: req.body });
  res.render("user1/list", data);
});

router.get("/register", (req, res) => {
  res.render("user1/register");
});

router.post("/register", async (req, res) => {
  //const user = req.body;

  const user = await User1.create({
    uid: req.body.uid,
    name: req.body.name,
    hp: req.body.hp,
    age: req.body.age,
  });

  console.log(user);

  res.redirect("/user1/list");
});

module.exports = router;
