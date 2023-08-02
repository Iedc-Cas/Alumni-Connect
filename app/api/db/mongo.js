import mongoose from "mongoose";


const signupSchema = new mongoose.Schema({
    emial: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.models.Signup || mongoose.model("Signup", signupSchema);


