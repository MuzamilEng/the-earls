const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        default: 'Admin',
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('Auth', authSchema)