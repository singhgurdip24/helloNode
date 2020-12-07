const express = require('express');
const { request } = require('http');
const path = require('path');
const members =require('./Members');
const logger = require('./middleware/logger');

const app = express();

// init middleware
app.use(logger);

app.get('/api/members',(req,res) => res.json(members));

app.get('/api/members/:id',(req,res) => {

    const found = members.some(member => member.id === req.params.id);

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));   
    } else {
        res.status(400).json({msg:`Member id ${req.params.id} not found`});
    }

});

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));