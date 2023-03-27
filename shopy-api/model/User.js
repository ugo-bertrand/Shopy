const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: 'The firstname of the user is required.'
        },

        lastname: {
            type: String,
            required: 'The lastname of the user is required.'
        },

        email: {
            type: String,
            required: 'An email address is required'
        },

        age: {
            type: Number
        },

        active: {
            type: Boolean
        },

        role: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Roles'
        }
    }
);
module.exports = mongoose.model('User', userSchema);