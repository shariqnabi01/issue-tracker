const express = require('express');
const router = express.Router();
const {
  createIssue,
  getIssues,
  updateIssue,
  deleteIssue,
} = require('../controllers/issueController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, createIssue);
router.get('/', auth, getIssues);
router.put('/:id', auth, updateIssue);
router.delete('/:id', auth, deleteIssue);

module.exports = router;
