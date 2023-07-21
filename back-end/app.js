const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 8080;

const knex = require('knex')(require('../back-end/knexfile.js')["development"])

const add_item = async (item) => {
    return knex('items')
        .insert(item)
        .returning('id')
        .then(ids => ids[0]);
};


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
app.get('/items/:id', function(req, res) {
    const itemId = req.params.id;

    knex('items')
        .select('*')
        .where({ id: itemId })
        .then(data => {
        if (data.length === 0) {
            res.status(404).json({
            message: 'The item you are looking for could not be found. Please try again'
            });
        } else {
            res.status(200).json(data[0]);
        }
        })
        .catch(err =>
        res.status(500).json({
            message: 'An error occurred while retrieving the item. Please try again'
        })
        );
});
app.get('/users', function(req,res) {
    knex('users')
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
// export const get_item = async (id: number): Promise<item> => {
//     const query = `SELECT * from item where id=${id}`;
//     return execute(query).then((res) => {
//       if (res.rowCount == 0) {
//         throw new Error(`No item was found with id: ${id}`);
//       }
//       const itemRow = res.rows[0];
//       return to_item(itemRow);
//     });
//   };

app.post('/items', (req, res) => {
    res.send('Post request to /items endpoint');
});

app.put('/items', (req, res) => {
    res.send('PUT request to /items endpoint');
});

app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;

    res.send(`Item ${itemId} updated successfully`);
});

app.patch('/items/:id', (req, res) => {
    let itemID = req.params.id;
    knex('items').where({ id: itemID }).update(req.body).returning('*')
        .then(function(data) {
            res.send(data);
        });
});

app.listen(port, () => console.log(`Express is on port ${port}.`))

