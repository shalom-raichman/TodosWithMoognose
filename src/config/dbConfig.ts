import mongoose from "mongoose"
import mongo from "mongoose"

export const connectToMongoos = async (): Promise<void> => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todos")
        console.log("Successfuly connected to mongo");
    } catch (err) {
        console.log(err);
    }
}