//initialize all required information. Port is assigned by express or 3001 if not assigned by express
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

//make all information on public accessible to the server.
app.use(express.static('public'));
//make the server able to parse nested json data from the client or server storage 
app.use(express.urlencoded({ extended: true}));
//parse incoming JSON data
app.use(express.json());

//link to index.html page on server load
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
//link to notes.html page when called for
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
    console.log(`API server now running on port ${PORT}!`);
});