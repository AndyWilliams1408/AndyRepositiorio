const express = require('express');
const docenteController = require('../controllers/docenteController');

const router = express.Router();

router.post('/', docenteController.createDocente);
router.get('/', docenteController.getAllDocentes);
router.get('/:id', docenteController.getDocenteById);
router.put('/:id', docenteController.updateDocente);
router.delete('/:id', docenteController.deleteDocente);

module.exports = router;