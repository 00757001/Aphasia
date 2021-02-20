const express = require("express");
var router = express.Router();
const Player = require("../models/player");
const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get("/" ,async (req, res) => {
    const players = await Player.find();
    res.send(players);
});

module.exports = router;