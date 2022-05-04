const express = require('express');
require("../src/db/conn");

const MensRanking = require("../src/models/mens");
const router= require("../src/routers/men");
const res = require('express/lib/response');
const { get } = require('express/lib/response');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Connnecton is live at port no. ${port}`);
});