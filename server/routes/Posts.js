const express = require('express');
const router = express.Router();
const { Cash, InKind } = require('../models');

//Get donate Cash
router.get("/", async (req, res) => {
    const listOfPost = await Cash.findAll();
    res.json(listOfPost);
});

//Post Donate Cash
router.post("/",  async(req, res) => {
    const cash = req.body;
    await Cash.create(cash);

    res.json(cash);
});

module.exports = router;