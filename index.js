const express = require('express');
const { request } = require('http');
const path = require('path');
const members =require('./Members');
const app = express();

app.get('/api/members',(req,res) => res.json(members));

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));