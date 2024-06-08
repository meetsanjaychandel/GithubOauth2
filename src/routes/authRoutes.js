// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/auth/github', authController.githubLogin);
router.get('/auth/github/callback', authController.githubCallback, (req, res) => {
    res.redirect('/profile');
});
router.get('/profile', authController.profile);
router.get('/logout', authController.logout);

module.exports = router;
