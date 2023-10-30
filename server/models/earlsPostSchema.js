const mongoose = require('mongoose');

const earlsPostSchema = new mongoose.Schema({
    postDate: {
        type: String,
    },
    postTitle: {
        type: String,
    }, 
    postTopic:{
        type: String
    },
    postImage: {
        type: String,
        default: "https://www.thespruce.com/thmb/LLKNiIRgGlJ8XlQtBu-IkGQrQU0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/small-garden-ideas-and-inspiration-4101842-01-5e0462c2365e42de86a4f3ebc2152c1b.jpg",
    },
    postDescription:{
        type: String
    },
    postInfo:{
        type: String
    },
    postLine1:{
        type: String
    },
    postLine2:{
        type: String
    },
    postLine3:{
        type: String
    },
    postLine4:{
        type: String
    },
    postSummary:{
        type: String
    },
    download_btn:{
        type: String
    },
    postFooter:{
        type: String,
    },
    postFooterText: {
        type: String,
    },
    readme_btn:{
        type: String
    }
})

module.exports = mongoose.model('EarlsPost', earlsPostSchema)