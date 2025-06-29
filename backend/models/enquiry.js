const { Schema, model } = require('mongoose')

const EnquirySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    number: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    message:{
        type:String,
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

}, { timestamps: true })


const Enquiry=model('enquiry',EnquirySchema)

module.exports=Enquiry