const express = require('express');
const router = express.Router();

const TaskCtrl = require('../controllers/taskCtrl');

router.get('/', TaskCtrl.getTasks);
router.get('/:taskId', TaskCtrl.getTask);
router.post('/add_task', TaskCtrl.addTask);
router.put('/update_task/:taskId', TaskCtrl.updateTask);
router.delete('/delete_task/:taskId', TaskCtrl.deleteTask);

module.exports = router;
