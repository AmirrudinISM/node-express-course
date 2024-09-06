const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    res.json({
        "status": "GET Success",
        "message": "All posts, my guy"
    });
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
}

const getTask = (req, res) => {
    res.send('task begotten, my guy');
}

const updateTask = (req, res) => {
    res.send('task updated, my guy');
}

const deleteTask = (req, res) => {
    res.send('task deleted, my guy');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}