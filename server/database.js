const mongoose = require("mongoose");

const URI = "mongodb://localhost/mean-crud";

//Connection
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log("MongoDB connected!"))
  .catch(error => console.error(error));

module.exports = mongoose;
