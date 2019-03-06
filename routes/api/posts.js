const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @desc    TESTS post route
// @access  Public

router.get("/test", (req, res) => res.json({ msg: "post Work" }));

module.exports = router;
