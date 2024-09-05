const getAllTasks = (req, res) => {
    res.json({
        "status": "GET Success",
        "message": "All posts, my guy"
    });
}

const createTask = (req, res) => {
    res.json({
        "status": "POST Success",
        "message": "Task created, my guy"
    });
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