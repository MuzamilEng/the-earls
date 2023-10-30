const mongoose = require('mongoose');

const earlsSchema = new mongoose.Schema({
    mainImage: {
        type: String,
        default: "https://www.thespruce.com/thmb/LLKNiIRgGlJ8XlQtBu-IkGQrQU0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/small-garden-ideas-and-inspiration-4101842-01-5e0462c2365e42de86a4f3ebc2152c1b.jpg",
    },
    mainText: {
        type: String,
    },
    footerTitle: {
        type: String
    },
    footerLinks: {
        type: [{ 
        title: String,
        links: [{ label: String, url: String}]
        }]
    },    
    signUpBtn: {
        type: String
    },
    footerPrivacyTitle: {
        type: String
    },
})

module.exports = mongoose.model('TheEarlsCourt', earlsSchema)