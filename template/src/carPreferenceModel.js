const mongoose = require('mongoose');

const carPreferenceSchema = new mongoose.Schema({
  carBrand: String,
});

const CarPreference = mongoose.model('CarPreference', carPreferenceSchema);

module.exports = CarPreference;