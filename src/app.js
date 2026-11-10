const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test',(req, res) => {
    res.send('This is a test route');
});

app.get('/hello', (req, res) => {
    res.send('Hello from the /hello route!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});