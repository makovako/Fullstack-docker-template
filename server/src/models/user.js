import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }
  },
  { collection: "User", timestamps: true }
);

let UserModel = mongoose.model("User", UserSchema);

export default UserModel;
