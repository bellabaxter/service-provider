const mongoose = require("mongoose");
require("../model/provider.model");
import 'dotenv/config';

//const mongodbUri = "mongodb://127.0.0.1:27017/provider_db";

const mongodbUri ="mongodb+srv://mahakchauhan2004:uZHFdC4CSp3Kl9wD@mymongodb.8l9mhql.mongodb.net/?retryWrites=true&w=majority&appName=mymongodb";
mongoose
  .connect(mongodbUri)
  .then(() => {
    console.log("successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });
  
