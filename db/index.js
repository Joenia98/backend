const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect("mongodb+srv://josegumart:bs7koFBKfHYBa3Bw@cluster0.a0vkv.mongodb.net/employees?retryWrites=true&w=majority");
};

module.exports = { connectDB };
