const mongoose = require("mongoose");
require("../model/provider.model");
import 'dotenv/config';

//const mongodbUri = "mongodb://127.0.0.1:27017/provider_db";

const mongodbUri =process.env.URI;
mongoose
  .connect(mongodbUri)
  .then(() => {
    console.log("successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });
  
