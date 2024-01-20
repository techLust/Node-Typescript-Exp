import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    isStudent: {
        type: Boolean
    }
},
    {
        timestamps: true,
    }
)

export const userModel = model('Users', userSchema)
