const express = require('express');
const router = express.Router();
const { getAllUsers,getAllIssues } = require('../controllers/admin.controller');
router.get('/allusers', getAllUsers);
router.get('/allissues', getAllIssues);
module.exports = router;