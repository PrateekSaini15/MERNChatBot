/* eslint-disable indent */
import mongoose from "mongoose";
import shortid from "shortid";
import crypto from "crypto";
import env from "dotenv";
import mongooseAutopopulate from "mongoose-autopopulate";

env.config();
// define the User model schema
const RestaurantMasterSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    RestaurantName: {
      type: String,
    },
    RestaurantCode: { type: String, default: shortid.generate },
    RestaurantLogo: String,
    Currency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant Currency",
      autopopulate: true,
    },
    TimeZone: String,
    AboutRestaurant: String,
    ContactPersonName: String,
    ContactPersonEmail: { type: String },
    Password: { type: String },
    Address: String,
    RoleName: String,
    IsActive: Boolean,
    IsFirstLogin: { type: Boolean, default: false },
    CreatedBy: String,
    CreatedOn: { type: Date, default: Date.now },
    ModifiedBy: String,
    ModifiedOn: { type: Date, default: Date.now },
  },
  { collection: "Restaurant Master" }
);
// RestaurantMasterSchema.plugin(mongooseAutopopulate);
// RestaurantMasterSchema.statics.findOneByContactPersonEmail = function (
//   ContactPersonEmail
// ) {
//   return this.findOne({
//     ContactPersonEmail: ContactPersonEmail,
//   }).exec();
// };

// // verify the password of the User documment
// RestaurantMasterSchema.methods.verify = function (Password) {
//   const encrypted = crypto
//     .createHmac("sha1", process.env.SECRET)
//     .update(Password)
//     .digest("base64");
//   return this.Password === encrypted;
// };

export default mongoose.model("Restaurant Master", RestaurantMasterSchema);
