require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./src/routes");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.use("/uploads", express.static('uploads'))

app.listen(4000, ()=>{
    console.log("app is running on port 4000")
});
