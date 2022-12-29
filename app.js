const express = require('express');
const app = express();
const PORT = 5000;
const colors = require('./colors.json');
const cors = require('cors');
app.use(cors())
const axios = require('axios');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

app.get('/', (req, res) => {
  console.log(colors);
  res.send("Welcome to NodeJS + Express CORS Server!")
})

app.get('/colors', (req, res) => {
  //res.set("Access-Control-Allow-Origin", "*")
  res.json(colors)
})

// Added to get data from cors-disabled-server
app.get('/user', async(req, res) => {
  const response = await axios.get('http://localhost:8080/user')
  res.json(response.data)
})


