const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const docenteRoutes = require('./routes/docenteRoutes');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/docentes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/api/docentes', docenteRoutes);

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});