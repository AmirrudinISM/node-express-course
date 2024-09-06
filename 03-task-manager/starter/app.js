const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
//middleware
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Dingus');
})

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening at port ${port}, my guy`));
    }
    catch{

    }
}

start();

