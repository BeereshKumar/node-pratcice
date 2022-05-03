const express = require('express');
require("../src/db/conn");

const MensRanking = require("../src/models/mens");

const res = require('express/lib/response');
const { get } = require('express/lib/response');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
// We will handle post req

app.post("/mens", async (req, res) => {
    try {


        req.body.dob = new Date(req.body.dob)


        const addingMensRecords = new MensRanking(req.body)


        const insertMens = await addingMensRecords.save();
        res.status(200).send(insertMens);

    } catch (e) {
        res.status(400).send(e);
    }

})

app.get("/mens", async (req, res) => {
    try {


        // req.body.dob= new Date(req.body.dob)
        const getMens = await MensRanking.find();
        res.status(200).send(getMens);


    } catch (e) {
        res.status(400).send(e);
    }

})

// We will handle post req individual

app.get("/mens/:id", async (req, res) => {
    try {


        const _id = req.params.id;
        const getMen = await MensRanking.findById({ _id });
        res.status(200).send(getMen);


    } catch (e) {
        res.status(400).send(e);
    }

})

// We will handle patch req  of individual

app.patch("/mens/:id", async (req, res) => {
    try {


        const _id = req.params.id;
        const updateObj = {}

        await MensRanking.findByIdAndUpdate(_id, updateObj, { new: true }, function (err, result) {
            if (err) {
                console.log('error', err);
                res.status(400).send(err);
            }
            res.status(200).send(result);
        });



    } catch (e) {
        res.status(400).send(e);
    }

})

app.get("/", async (req, res) => {
    res.status(200).send("hello API");
});

app.listen(port, () => {
    console.log(`Connnecton is live at port no. ${port}`);
})