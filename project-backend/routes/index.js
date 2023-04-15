const express = require('express');
const app = express.Router();
var sqlite = require("better-sqlite3");

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});

/**
 * @openapi
 * /:
 *   get:
 *     description: No inputs required
 *     responses:
 *       200:
 *         description: Returns an object of todos.
 */
router.get('/', function(req, res, next) {
  var db = new sqlite('database.db');
  var todos = db.prepare("SELECT * FROM todos").all();
  res.json({ todos:todos })
});

/**
 * @openapi
 * /:
 *   post:
 *     description: 'Task required in the body of the request i.e. {task: "Walk the cat"}'
 *     responses:
 *       201:
 *         description: Returns a blank object.
 */
router.post('/', function(req, res, next) {
  var db = new sqlite('database.db');
  db.prepare('INSERT INTO todos (task) VALUES (?)').run(req.body.task);
  res.status(201).json({})
});


/**
 * @openapi
 * /:
 *   delete:
 *     description: "Task required in the body of the request i.e. {todo_id: 1}"
 *     responses:
 *       204:
 *         description: Returns a blank object.
 */
router.delete('/', function(req, res, next) {
  var db = new sqlite('database.db');
  db.prepare('DELETE FROM todos where id = (?)').run(req.body.todo_id);
  res.status(204).json({})
});

/**
 * @openapi
 * /:
 *   put:
 *     description: "Task required in the body of the request i.e. {todo_id: 1}"
 *     responses:
 *       204:
 *         description: Returns a blank object.
 */
router.put('/', function(req, res, next) {
  var db = new sqlite('database.db');
  console.log(req.body)
  db.prepare('UPDATE todos SET task = ? where id = (?)').run(req.body.task, req.body.todo_id);
  res.status(204).json({})
});

module.exports = router;
