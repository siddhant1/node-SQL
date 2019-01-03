const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const passenger = require("./routes/passenger");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/api/passenger", passenger);

app.listen(3000, () => console.log("Listening on port 3000"));
