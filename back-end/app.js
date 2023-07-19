const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Express is on port ${port}.`))

app.get("/", (req, res) => {
    
})

//postgres location
//\\wsl.localhost\Ubuntu\usr\share\postgresql\15  /home/mario/projects2/Project_Z-Prefix/back-end/db