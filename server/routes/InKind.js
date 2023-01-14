const express = require('express');
const router = express.Router();
const { InKind } = require('../models');

//Get Donate InKInd
router.get("/", async(req, res) => {
    const inKindList = await InKind.findAll();
    res.json(inKindList); 
});

//Post Donate InKind
router.post("/", async(req, res) => {
    const inkind = req.body;
    await InKind.create(inkind);

    res.json(inkind);
});

module.exports = router;