const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true},
    lastName: {
        type: String,
        default: "N/A"},
    living: {
        type: Boolean,
        default: true},
    bounty: Number,
    type: String
})

module.exports = mongoose.model("Bounty", bountySchema)