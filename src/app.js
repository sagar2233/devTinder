const express = require('express');
const app = express();
const PORT = 3000;



app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/user', (req, res) => {
  console.log(req.query)
  res.send('User data received');
});

app.delete('/user', (req, res) => {
  res.send('User deleted');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});