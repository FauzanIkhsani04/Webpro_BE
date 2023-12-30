const express = require('express');
const router = express.Router();

const kritik = require('../controllers/Kritik');

router.get('/', kritik.get);
router.get('/:_id', kritik.getSingle);
router.post('/', kritik.post);
router.delete('/:_id', kritik.delete);

module.exports = router;