const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect("mongodb://localhost/employees");
  console.log("MongoDB Conected");
};

module.exports = { connectDB };
