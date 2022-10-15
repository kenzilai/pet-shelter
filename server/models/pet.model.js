const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "Name must be at least 3 characters."],
        },
        
        type: {
            type: String,
            required: [true, "Pet type is required"],
            minlength: [3, "Pet type must be at least 3 characters."],
        },
        
        description: {
            type: String,
            required: [true, "Description type is required"],
            minlength: [3, "Description must be at least 3 characters."],
        },
        
        skill_1: {
            type: String,
        },

        skill_2: {
            type: String,

        },

        skill_3: {
            type: String,

        },

    }, {timestamps: true}
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;