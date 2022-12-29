const express = require('express');
const app = express();
const PORT = 8080

app.listen(PORT, () => {
  console.log("CORS disabled server is up and running on port 8080.");
})

app.get('/user', (req, res) => {
  res.send({
    'name': 'FuzzySid',
    'age': 22
  })
})