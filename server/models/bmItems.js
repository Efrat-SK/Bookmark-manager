const mongoose = require('mongoose')

const BmItemSchema = new mongoose.Schema({
    itemText:{
        type:String,
        required: true
    },
    itemTitle:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Bm', BmItemSchema)

