import express from "express";

import { APP_PORT } from "./config";

import connectToDb from './db/connect';
import clearDb from './db/clear'
import initDb from './db/init'

import User from './models/user'

connectToDb()
.then(() => clearDb())
.then(() => initDb());

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/welcome", async (req, res) => {
  console.log("Client request received");
  const user = await User.find().exec();
  console.log(user[0].name);
  res.send(
    `Hello Client! There is one record in the database for ${user[0].name}`
  );
});

app.listen(APP_PORT, () => {
  console.log(`Server running on ${APP_PORT}`);
});
