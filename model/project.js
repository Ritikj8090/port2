import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    number: String,
    name: String,
    gitlink: String,
    weblink: String,
    description: String,
    image: [String],
    tech: [String],
    mainImage: String
    
})

export default mongoose.models.Project || mongoose.model('Project', projectSchema)
