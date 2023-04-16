const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;
var sqlite = require('better-sqlite3');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Insert the form data into the database
  var db = new sqlite('database.db');
  db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)').run(name, email, message);

  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
