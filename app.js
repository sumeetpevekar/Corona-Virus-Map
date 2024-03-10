const express = require('express');
const app = express()
const path = require('path');
const fs = require('fs');
const port = 80;

const staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));
app.use(express.urlencoded())

app.get('/', (req, res)=>{
    res.status(200).render("file");
})

app.listen(port, ()=>{
    console.log(`server started listening on localhost:${port}`)
})