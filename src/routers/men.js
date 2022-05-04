
const express = require("express");
const router = new express.Router();

const MensRanking=require("../models/mens");


// We will handle post req

router.post("/mens", async (req, res) => {
    try {


        req.body.dob = new Date(req.body.dob)


        const addingMensRecords = new MensRanking(req.body)


        const insertMens = await addingMensRecords.save();
        res.status(200).send(insertMens);

    } catch (e) {
        res.status(400).send(e);
    }

})

// We will handle get req All

router.get("/mens", async (req, res) => {
    try {


        // req.body.dob= new Date(req.body.dob)
        const getMens = await MensRanking.find().sort({ "ranking": 1 });
        res.status(200).send(getMens);


    } catch (e) {
        res.status(400).send(e);
    }

})

// We will handle get req individual

router.get("/mens/:id", async (req, res) => {
    try {


        const _id = req.params.id;
        const getMen = await MensRanking.findById({ _id });
        res.status(200).send(getMen);


    } catch (e) {
        res.status(400).send(e);
    }

})

// We will handle patch req  of individual

router.patch("/mens/:id", async (req, res) => {
    try {


        const _id = req.params.id;
        // const updateObj = {}


        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body);
        res.send(getMen);


    } catch (e) {
        res.status(400).send(e);
    }

})

// We will handle Delete req individual

router.delete("/mens/:id", async (req, res) => {
    try {


        // const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.status(200).send(getMen);


    } catch (e) {
        res.status(400).send(e);
    }

})

router.get("/", async (req, res) => {
    res.status(200).send("hello API");
}); 

module.exports = router;