const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  utilisateur_id: Number,
  chambre_id: Number,
});

module.exports = mongoose.model('Reservation', reservationSchema);

