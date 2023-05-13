import { Schema, models, model } from "mongoose";

const ItemSchema = new Schema({
  itemName: {
    type: String,
    required: [true, "Name of item is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  tags: {
    type: [
      {
        tag: String,
        color: String,
      },
    ],
  },
  startPrice: {
    type: Number,
    required: [true, "Starting price is required!"],
  },
  endDate: {
    type: Date,
    required: [true, "Ending date is required!"],
  },
  owner: {
    type: String,
    required: [true, "Owner is required!"],
  },
  bidders: {
    type: [
      {
        username: String,
        price: Number,
      },
    ],
  },
});

const Items = models.Items || model("Items", ItemSchema);

export default Items;
