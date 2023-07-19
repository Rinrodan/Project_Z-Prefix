const express = require('express')
const app = express()
const port = 3001
// const pgp = require('pg-promise')(/* options */)
// const db = pgp('postgres://username:password@host:port/database')

// db.one('SELECT $1 AS value', 123)
//   .then((data) => {
//     console.log('DATA:', data.value)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })
app.get('/', (req, res) => {
    res.send('This is the back end server')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})