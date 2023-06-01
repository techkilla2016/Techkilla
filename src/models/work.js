import mongoose from "mongoose";
const workSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
})
mongoose.models = {}
export default new mongoose.model('recent_work', workSchema)