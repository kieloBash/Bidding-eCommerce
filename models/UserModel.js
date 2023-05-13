import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  cart: {
    type: [{
      itemName: String,
      price: Number
    }],
  },
});

const Users = models.Users || model("Users", UserSchema);

export default Users;
