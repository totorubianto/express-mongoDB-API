const express = require("express");
const router = express.Router();

// @route   GET api/profile/test
// @desc    TESTS post route
// @access  Public

router.get("/test", (req, res) => res.json({ msg: "profile Work" }));

module.exports = router;
