import mongoose from "mongoose";
const Schema = mongoose.Schema;
// define the User model schema
const ProductSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    RestaurantId: { type: Schema.Types.ObjectId },
    ItemName: String,
    ItemDetail: String,
    Price: Number,
    Detail: String,
    ItemImage: String,
    Availability: [],
    Category: [],
    IncludeTax: Boolean,
    Tax: [
      {
        type: Schema.Types.ObjectId,
        ref: "Restaurant Tax",
        autopopulate: true,
      },
    ],
    Veg_NonVeg: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant Item Types",
      autopopulate: true,
    },
    IsActive: Boolean,
    CreatedBy: { type: Schema.Types.ObjectId },
    CreatedOn: { type: Date, default: Date.now },
    ModifiedBy: String,
    ModifiedOn: { type: Date, default: Date.now },
  },
  { collection: "Restaurant Food Items" }
);

export default mongoose.model("Restaurant Food Items", ProductSchema);
