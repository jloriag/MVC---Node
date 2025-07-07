const express = require('express')
const router = express.Router();
const EstudianteController = require('../controllers/EstudianteController');

router.get('/',EstudianteController.getAll)


module.exports = router;