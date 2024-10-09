import mongoose from "mongoose"

export const userSchema = new mongoose.Schema({
    user_name: {
        typ: String,
        required: [true, "user name is requirea"],
        minlength: [5, "short name"]
    }
})

export const userModel = mongoose.model("user", userSchema)