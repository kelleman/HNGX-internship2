const express = require('express')
const router = express.Router();
const personController = require('../controllers/personController')


router.post('/', personController.createPerson);
router.get('/:id', personController.getPersonById);
router.put('/:id', personController.updatePersonById);
router.delete('/:id', personController.deletePersonById);

module.exports = router;