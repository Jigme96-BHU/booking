const express = require("express");
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/data', authController.data);
router.post('/delete', authController.delete);


module.exports = router;
