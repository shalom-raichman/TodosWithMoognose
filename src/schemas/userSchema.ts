import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    user_name: {
        typ: String,
        required: [true, "user name is requirea"],
        minlength: [5, "short name"]
    }
})

const userModel = mongoose.model("user", userSchema)