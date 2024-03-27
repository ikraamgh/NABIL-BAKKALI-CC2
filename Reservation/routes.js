require('dotenv').config();
const express = require('express');
const router = express.Router();

const Reservation = require('./model');
const Chambre = require('../Chambre/model');
const Utilisateur = require('../Auth-service/model');

router.post('/reservations', async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findById(req.body.utilisateur_id);
    if (!utilisateur) {
      return res.status(404).json({ message: "non trouve" });
    }

    const chambre = await Chambre.findById(req.body.chambre_id);
    if (!chambre) {
      return res.status(404).json({ message: "non trouvee" });
    }
    if (!chambre.disponibilite) {
      return res.status(400).json({ message: "pas disponible" });
    }

    const reservation = new Reservation(req.body);
    await reservation.save();

    chambre.disponibilite = false;
    await chambre.save();

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
