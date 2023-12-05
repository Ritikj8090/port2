import mongoose from 'mongoose';

const visiterSchema = new mongoose.Schema({
    visit: {
        type:Number
    }
})

export default mongoose.models.Visiter || mongoose.model('Visiter', visiterSchema)
