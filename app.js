const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const axios = require('axios');

const task = require('./task.json')



// Get Api Call Task
app.get('/api/v1/task', (req, res) => {
    res.send(task)
});


// post Api call Task
app.post('/api/v1/task',(req,res)=>{
    const find_all_task = task;
    let data = req.body;
    console.log(data);
    res.send(data)
})




app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on http://localhost:${port}`);
});



module.exports = app;