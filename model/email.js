import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
    name: String,
    email: String,
    date: String,
    body: String
    
})

export default mongoose.models.Email || mongoose.model('Email', emailSchema)