const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 8080;

const knex = require('knex')(require('../back-end/knexfile.js')["development"])

app.use(cors());


app.set('views', __dirname + './public');
app.set('view engine', 'html');
    
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/items', function(req,res) {
    knex('items')
    .select('*')
    .then(data => {
        // var usersNames = data.map(user => user.name); 
        res.status(200).json(data);
    })
    .catch(err =>
        res.status(404).json({
            message: 'The data you are looking for could not be found. Please try again'
        })
    )
})
app.patch('/items/:id', (req, res) => {
    let itemID = req.params.id;
    knex('items').where({ id: itemID }).update(req.body).returning('*')
        .then(function(data) {res.send(data)})
})

app.listen(port, () => console.log(`Express is on port ${port}.`))

