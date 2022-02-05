const mongoose = require("mongoose"); //load mongoose
const Schema = mongoose.Schema; //learn then understand more\

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", userSchema);
