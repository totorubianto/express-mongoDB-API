const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @desc    TESTS post route
// @access  Public

// Post model
const Post = require("../../models/Post");
// Profile model
const Profile = require("../../models/Profile");

router.get("/test", (req, res) => res.json({ msg: "post Work" }));

module.exports = router;
