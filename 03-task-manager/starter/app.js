require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Dingus');
})

app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port, console.log(`server is listening at port ${port}, my guy`));