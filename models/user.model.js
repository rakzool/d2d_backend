const mongoose = require("mongoose");

const Teams = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    teamSize: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, require: true },
    data: {
      teamName: { type: String, required: true, unique: true },
      teamLead: { type: String, required: true },
      member1: String,
      member2: String,
      member3: String,
      member4: String,
    },
  },
  { collection: "team-data" }
);

const model = mongoose.model("TeamData", Teams);

module.exports = model;
