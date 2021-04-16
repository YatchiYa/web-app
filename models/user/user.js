// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    grades: {
        type: String,
    },
    guilde: {
        type: String,
    },
    rank: {
        type: Number,
    },
    expValue: {
        type: Number,
    },
    level: {
        type: Number,
    },
    
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("users", DataSchema);