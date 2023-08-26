const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.headers);
  res.status(402).send('ok');
});

app.post('/', (req, res) => {
  res.status(402).json({name: 'akif'});
});

app.listen(3000);
