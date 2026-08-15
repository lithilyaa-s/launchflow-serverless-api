const express = require("express");

const createFlag = require("./handlers/createFlag");
const getFlag = require("./handlers/getFlag");
const updateFlag = require("./handlers/updateFlag");
const deleteFlag = require("./handlers/deleteFlag");
const evaluateFlag = require("./handlers/evaluateFlag");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    project: "LaunchFlow",
    status: "Running",
    message: "Serverless Feature Flag API is ready!"
  });
});

app.post("/flags", createFlag);
app.get("/flags/:id", getFlag);
app.put("/flags/:id", updateFlag);
app.delete("/flags/:id", deleteFlag);
app.get("/flags/:id/evaluate", evaluateFlag);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 LaunchFlow running on port ${PORT}`);
});