import express from "express"
import mongoose from "mongoose"
import dotevn from 'dotenv'

const app = express()
dotevn.config();

// Connecting to Database
mongoose.set('strictQuery', true);
try {
    await mongoose.connect(process.env.MONGODB);
    console.log("MongoDB connected sucessfully")

} catch (error) {
    console.log(error);
}


// App is listening
app.listen(8000, () => {
    console.log("backend is running")
})