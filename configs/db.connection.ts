import 'dotenv/config'
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || ''

export const dbConn = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Database connected')
    } catch (e) {
        console.log('Failed to connect database')
    }
}