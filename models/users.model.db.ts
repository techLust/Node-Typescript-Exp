import { Schema, model } from "mongoose";
import { User } from "../interfaces/interface";

const userSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
    isStudent: {
        type: Boolean
    }
},
    {
        timestamps: true,
    }
)

export const userModel = model<User>('Users', userSchema)
