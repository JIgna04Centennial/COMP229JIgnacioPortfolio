import mongoose from 'mongoose';

// Define the schema for the contacts collection
const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    },
});

// Create and export the model
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
