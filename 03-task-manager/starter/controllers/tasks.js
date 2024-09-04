const getAllTasks = (req, res) => {
    res.send('all items, my dude');
}

const createTask = (req, res) => {
    res.send('task created, my guy');
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