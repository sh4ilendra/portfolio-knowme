const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");

//@route  GET api/users
//@desc   Test route
//@access Public
router.get("/", (req, res) => {
  res.send("User Test route [GET]");
});

//@route  POST api/users
//@desc   Register User
//@access Public
router.post(
  "/",
  [
    check("name", "Name is required").exists(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with more than 8 characters"
    ).isLength({ min: 8 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    res.send("User route");
  }
);

module.exports = router;
