const express = require('express');
const { default: mongoose } = require('mongoose');
require('./config');
const Students = require('./students');


const app = express();
app.use(express.json());

//Post API
app.post('/create', async (req, resp) => {
    let data = await new Students(req.body);
    let result = await data.save();
    console.log(result);
    resp.send(result);

});


//Get API
app.get('/list', async (req, resp) => {
    let data = await Students.find();

    console.log(data);
    resp.send(data);
})


//Delete API
app.delete('/delete/:_id', async (req, resp) => {
    let data = await Students.deleteOne(req.params);
    resp.send(data);
})

//Put API
app.put('/put/:_id', async (req, resp) => {
    let data = await Students.deleteOne(
        req.params,
        {
            $set: req.body
        }
    );
    resp.send(data);
})


app.listen(5000);