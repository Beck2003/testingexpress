const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('express'))

app.get('/', (req, res) => {
    res.send('hello');
})

app.get('/time', (req, res) => {
    res.send(`the current time is: ${Date()}`);
})

// app.get('/addUser', (req, res)=>{
//     res.sendFile(`${__dirname}/express/index.html`)
// })

app.post('/addUser', (req, res)=>{
    const userEmail = req.body.email;
    const userFirstName = req.body.firstname;
    const userLastName = req.body.lastname;
    res.send(`new user email: ${userEmail}, new user first name: ${userFirstName}, new user last name: ${userLastName}`)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})


// app.get('/', (req, res) => {
//     res.send('hello');
// })
// app.get('/sometext', (req, res) => {
//     fs.readFile('./sometext.txt', 'utf-8', (err, data)=>{
//         res.send(`<pre>${data}</pre>`);
//     })
// })

// app.get('/code', (req, res) => {
//     const file = path.join(__dirname, 'index.html');
//     res.sendFile(file);
// })