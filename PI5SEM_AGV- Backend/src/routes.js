const express = require('express');
const router = express.Router();

const piController = require('./controllers/piController');

router.get('/agv', piController.getAllAGV);

router.get('/agv/:id', piController.getAGV);

router.get('/client', piController.getAllClient);

router.get('/client/:id', piController.getClient);

router.post('/client', piController.postClient);

router.put('/client/:id', piController.putClient);

router.delete('/client/:id', piController.deleteClient);

router.get('/solicitar/:id', piController.getSolicitar);

router.put('/solicitar/:id', piController.putSolicitar);

router.get('/Controlar_veiculo/:id', piController.getControlar_veiculo);

router.put('/Controlar_veiculo/:id', piController.putControlar_veiculo);

module.exports = router;