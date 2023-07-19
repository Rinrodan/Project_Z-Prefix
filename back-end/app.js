const express = require('express');
const path = require('path');
// const es6Renderer = require('express-es6-template-engine');
const app = express();
const port = 8080;

//app.engine('html'); //app.engine('html', es6Renderer);
app.set('views', __dirname + './public');
app.set('view engine', 'html');
    
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(port, () => console.log(`Express is on port ${port}.`))

// app.get('/', (req, res) => {
//     res.render('index', { title: 'Hey', message: 'Hello there!' })
//     })

// app.get('/items', function(req,res) {
//     knex('items')
//     .select('*')
//     .then(data => {
//         var movieTitles = data.map(movie => movie.title); 
//         res.status(200).json(movieTitles);
//     })
//     .catch(err =>
//         res.status(404).json({
//             message: 'The data you are looking for could not be found. Please try again'
//         })
//     )

//postgres location
//\\wsl.localhost\Ubuntu\usr\share\postgresql\15  /home/mario/projects2/Project_Z-Prefix/back-end/db