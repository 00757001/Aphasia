const express = require("express");
var router = express.Router();
const User = require("../models/User");

router.get("/:id" ,async (req, res) => {
    const user = await User.findOne({ _id: req.params.id});
    res.send(user);
});

module.exports = router;