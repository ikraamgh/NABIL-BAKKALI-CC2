const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  nom: String,
  email: String,
  login: String,
  mdp: String,
});

module.exports = mongoose.model('Reservation', reservationSchema);

