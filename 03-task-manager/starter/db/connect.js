const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://amirrudinadlan:byjJYiXRAOB49HQN@nodeexpressproject.yhjt7.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProject';

mongoose
.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log('connected to DB'))
.catch((err) => console.log(err));