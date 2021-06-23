const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../model/User");

//@route  GET api/auth
//@desc   Authenticate User using JWT
//@access Public
router.get("/", auth, async (req, res) => {
  try {
    // find user by Id in DB
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
