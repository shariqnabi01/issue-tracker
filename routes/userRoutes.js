const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');

router.get('/', auth, getProfile);
router.put('/', auth, updateProfile);

module.exports = router;
