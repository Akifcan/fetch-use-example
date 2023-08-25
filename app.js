const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('ok');
});

app.post('/', (req, res) => {
  // res.json({url: req.url, ...req.body, ...req.headers, ...req.query});
  res.json({name: 'akif'});
});

app.listen(3000);
