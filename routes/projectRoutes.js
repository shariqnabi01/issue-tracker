const express = require('express');
const router = express.Router();
const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, createProject);
router.get('/', auth, getProjects);
router.put('/:id', auth, updateProject);
router.delete('/:id', auth, deleteProject);

module.exports = router;
