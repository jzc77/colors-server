const express = require('express');
const app = express();
const PORT = 5000;
const colors = require('./colors.json')

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

app.get('/', (req, res) => {
  console.log(colors);
  res.send("Welcome to NodeJS + Express CORS Server!")
})

app.get('/colors', (req, res) => {
  res.json(colors)
})

