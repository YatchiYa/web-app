// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    username: {
        type: String,
    },
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    views: {
        type: Number,
    },
    responses: {
        type: Number,
    },
    comments: {
        type: Object
    }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("presentations", DataSchema);