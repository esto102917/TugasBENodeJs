const express = require('express');
const ProfileController = require('../controllers/profile.controller');

const router = express.Router();

router.get('/', ProfileController.helloWorld);
router.post('/addprofile', ProfileController.addProfile);
router.post('/delprofile', ProfileController.deleteUserById);
router.post('/getprofile', ProfileController.getProfileById);
// router.post('/editProfile', ProfileController.editProfile);

module.exports = router;
