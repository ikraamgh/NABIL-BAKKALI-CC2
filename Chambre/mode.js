const mongoose = require('mongoose');

const chambreSchema = new mongoose.Schema({
  type: String,
  capacite: Number,
  prix: Number,
  disponibilite: Boolean,
  hotel: String 
});

module.exports = mongoose.model('Chambre', chambreSchema);

