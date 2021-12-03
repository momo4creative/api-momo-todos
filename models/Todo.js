const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: [4, "Minimal 4 karakter !"],
      trim: true,
      required: [true, "Wajib diisi !"],
    },

    desc: {
      type: String,
      trim: true,
    },

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    tag_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag" }],

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("todo", todoSchema);
