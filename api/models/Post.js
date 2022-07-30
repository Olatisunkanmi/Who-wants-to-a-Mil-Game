const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    
    username: {
      type: String,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
    },
    comments: {
            type: Array,
            required: false,
    },

    likes: {
      type: Array,
      required : false ,
    }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
