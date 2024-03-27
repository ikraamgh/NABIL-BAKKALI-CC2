const express = require('express');
const router = express.Router();
const Chambre = require('./model');

router.post('/chambres', async (req, res) => {
  try {
    if (!req.body.prix || isNaN(req.body.prix)) {
      return res.status(400).json({ message: "Le prix est obligatoire " });
    }

    if (typeof req.body.disponibilite !== 'boolean') {
      return res.status(400).json({ message: "boolean" });
    }

    const chambre = new Chambre(req.body);
    await chambre.save();
    res.status(201).json(chambre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/chambres/:id', async (req, res) => {
  try {
    const chambre = await Chambre.findById(req.params.id);

    if (!chambre) {
      return res.status(404).json({ message: "Chambre non trouve" });
    }

    res.status(200).json(chambre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});