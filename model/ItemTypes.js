import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TypeSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    RestaurantId: { type: Schema.Types.ObjectId },
    Type: String,
    IsActive: Boolean,
    CreatedBy: { type: Schema.Types.ObjectId },
    CreatedOn: { type: Date, default: Date.now },
    ModifiedBy: String,
    ModifiedOn: { type: Date, default: Date.now },
  },
  { collection: "Restaurant Item Types" }
);

export default mongoose.model("Restaurant Item Types", TypeSchema);
