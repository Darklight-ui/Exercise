const mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username:{type: String, required: true, unique: true},
    description: {type: String, require: true},
    duration: {type: String, require: true},
    date: {type: Date, require: true}
},{
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise