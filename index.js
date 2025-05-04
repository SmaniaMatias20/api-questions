const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.get('/api/questions', (req, res) => {
    fs.readFile('./data/questions.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error al leer las preguntas.');
        const questions = JSON.parse(data);
        res.json(questions);
    });
});

app.listen(3000, () => {
    console.log('API corriendo en http://localhost:3000');
});
