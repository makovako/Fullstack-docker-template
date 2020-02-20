import express from "express";
import Mongoose from "mongoose";

const port = process.env.PORT || 4000;
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/test";

const app = express();

const options = {
  useNewUrlParser: true
};

const conn = () => {
  Mongoose.connect(mongoUri, options);
};

conn();

const db = Mongoose.connection;
db.on("error", err => {
  console.log("There was a problem connecting to mongo:", err);
  console.log("Trying again");
  setTimeout(() => conn(), 5000);
});

db.once("open", () => console.log("Successfully connected to mongo"));

app.get("/welcome", async (req, res) => {
  console.log("Client request received");
  const user = await User.find().exec();
  console.log(user[0].name);
  res.send(
    `Hello Client! There is one record in the database for ${user[0].name}`
  );
});

const { Schema } = Mongoose;
const userSchema = new Schema(
  {
    name: String
  },
  {
    timestamps: true
  }
);

const User = Mongoose.model("User", userSchema);
const user = new User({ name: "Big Bill Brown" });
user
  .save()
  .then(user => console.log(`${user.name} saved to the database`))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  
})
