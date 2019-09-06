const mongoose = require('mongoose')

const plantSchema = mongoose.Schema({
    name: String,
    size: Number,
    position: Schema.Types.Mixed,
    project: {type:mongoose.Schema.Types.ObjectId, ref: 'Project'}

})

const Plant = mongoose.model('Plant', plantSchema)

module.exports = Plant;