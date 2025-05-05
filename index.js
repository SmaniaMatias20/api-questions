const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.get('/api/questions', (req, res) => {
    fs.readFile('./data/questions.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error al leer las preguntas.');

        let questions = JSON.parse(data);

        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }

        res.json(questions.slice(0, 10));
    });
});

app.listen(3000, () => {
    console.log('API corriendo en http://localhost:3000');
});
