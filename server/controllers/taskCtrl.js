const Task = require('../models/task');

class TaskCtrl {
  static getTasks(req, res, next) {
    Task.find()
      .then((tasks) => {
        res.status(200).json(tasks);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).json(tasks);
      })
  }

  static getTask(req, res, next) {
    Task.find({
        _id: req.params.taskId
      })
      .then((task) => {
        res.status(200).json(task);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).json(err);
      })
  }

  static addTask(req, res, next) {
    Task.create(req.body)
      .then((value) => {
        res.status(201).json(value);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).json(err);
      })
  }

  static updateTask(req, res, next) {
    Task.findOneAndUpdate({
        _id: req.params.taskId
      }, req.body)
      .then((task) => {
        res.status(200).json(task);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).json(err);
      })
  }

  static deleteTask(req, res, next) {
    Task.delete({
        _id: req.params.taskId
      })
      .then((value) => {
        res.status(200).json(value);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).json(err);
      })
  }
}

module.exports = TaskCtrl;
