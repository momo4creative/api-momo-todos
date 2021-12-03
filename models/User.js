const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: [true, "Username sudah terdaftar !"],
      minlength: [4, "Minimal 4 karakter !"],
      trim: true,
      required: [true, "Username wajib ada !"],
    },

    password: {
      type: String,
      required: [true, "Password wajib ada !"],
    },

    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "role",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
