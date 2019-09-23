const express = require("express");
const morgan = require("morgan");
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

//# Routes
app.use(app.get("base_url"), require("./routes/employee.routes"));

//Starting
app.listen(app.get("port"), () => {
  console.log("Server on port: " + app.get("port"));
});
