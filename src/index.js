// require("dotenv").config();// can not be used here as this type has been set to module, only import will work
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB();
/*import mongoose from "mongoose";
import { DB_NAME } from "./constants";


import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => console.log("ERROR:" + error));

    app.listen(process.env.PORT, () =>
      console.log(`app is listening on ${process.env.PORT}`)
    );
  } catch (error) {
    console.error("ERROR:" + error);
    throw err;
  }
})();
*/
