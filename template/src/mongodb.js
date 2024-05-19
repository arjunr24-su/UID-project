const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://yadhu:aadi4321@cluster0.iwq4pse.mongodb.net/login")
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(() => {
        console.log("Error connecting to MongoDB")
    });

const LogInSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const CarPreferenceSchema = new mongoose.Schema({
    carBrand: {
        type: String,
        required: true
    },
    carType: {
        type: String,
        required: true
    },
    seats: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    power: {
        type: String,
        required: true
    }
});

const CarPreference = mongoose.model('CarPreference', CarPreferenceSchema);
const collection = mongoose.model('collection', LogInSchema);

module.exports = { CarPreference, collection };
