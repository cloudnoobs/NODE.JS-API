const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const lodash =require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

app.get("/empinformation", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({"EMPID": 1, "Name" : "Justin Laws","Age" : 34, "City" :"Jacksonville", "State" : "NC", "Zip" : 28540});
});

app.post("/empinformation", (req,res) => {
    const id = uuid();
    const {
        Name,
        Age,
        Phone,
        Email,
        State,
      } = req.body

      if (!Name,!Age,!Phone,!Email,!State) {
            return res.sendStatus(400)
      }

    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.sendStatus(201);

})

app.listen (3000, () => console.log("API Server is running..."));