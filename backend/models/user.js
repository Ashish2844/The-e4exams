const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    centerName: {
        type: String,
        required: true,
    },

    postalAddress: {
        type: String,
        required: true,
    },

    contact: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    centerType: {
        type: String,
        required: true,
    },

    availability: {
        type: Date,
        default: Date.now
    },

    isDeleted: {
        type: Boolean,
        default: false
    },

    deletedAt: { Date },

    createdAt: {
        type: Date,
        default: Date.now
    },

}, { timestamps: true })



const User = model('user', UserSchema)

module.exports = User