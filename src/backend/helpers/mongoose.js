import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    filePath: { // path of file on the machine
        type: String, 
        required: true 
    },
    uploadedAt: { // uploaded data
        type: Date, 
        default: Date.now 
    },
    uploader: { // user who uploaded the file
        type: String, 
        required: true 
    },
    likes: { // number of likes
        type: Number, 
        default: 0 
    },
    event: { // event the image was part of
        type: String 
    },
    approval: { // whether the image has been approved by admin
        type: Boolean, 
        default: false 
    }
});
export const file = mongoose.model("Image", fileSchema);

export const connectDB = async () => { // connecting with mongodb
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
    }
};