const mongoose = require("mongoose");

const roleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: 'The name of the role is required'
        }
    }
);
module.exports = mongoose.model('Role', roleSchema);