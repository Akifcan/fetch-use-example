const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('ok');
});

app.post('/', (req, res) => {
  res.json({url: req.url, ...req.body, ...req.headers, ...req.query});
});

app.listen(3000);
