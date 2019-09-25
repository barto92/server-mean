const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const { mongoose } = require("./database");

//# Settings
app.set("port", process.env.PORT || 3000);
app.set("base_url", "/api/employees/");

//# Middlewares
//Show information about the interaction between server and client
app.use(morgan("dev"));
//Makes that sever understand json
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

//# Routes
app.use(app.get("base_url"), require("./routes/employee.routes"));

//Starting
app.listen(app.get("port"), () => {
  console.log("Server on port: " + app.get("port"));
});
