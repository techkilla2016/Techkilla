import mongoose from "mongoose"
const caseStudieSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    cover_page: {
        type: String,
        required: true
    },

    slag: {
        type: String,
        required: true
    },
    cart_them: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    case_studie: [
        {
            thumbnail: String,
            heading: String,
            desc: String
        }
    ],
    use_case_oder: [String],

    use_case_image: [
        {
            icon: String,
            heading: String,
            desc: String
        }
    ],

    KeyHighlights: [
        {
            icon: String,
            heading: String
        }
    ],
    releted_project: [
        {
            thumbnail: String,
            heading: String,
            url: String,
        }
    ],
    benefits_heading: String,
    benefits: [
        {
            icon: String,
            heading: String,
            desc: String
        }
    ],
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}
export default new mongoose.model('case_studie', caseStudieSchema)