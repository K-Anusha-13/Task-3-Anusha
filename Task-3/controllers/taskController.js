const db = require("../config/db");

// CREATE TASK
exports.createTask = (req, res) => {
  const { title, description } = req.body;

  const sql =
    "INSERT INTO tasks(title, description) VALUES (?, ?)";

  db.query(sql, [title, description], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "Task Created Successfully",
      taskId: result.insertId
    });
  });
};

// GET ALL TASKS
exports.getTasks = (req, res) => {
  db.query(
    "SELECT * FROM tasks",
    (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(results);
    }
  );
};

// GET TASK BY ID
exports.getTaskById = (req, res) => {

  const { id } = req.params;

  db.query(
    "SELECT * FROM tasks WHERE id=?",
    [id],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);
    }
  );
};

// UPDATE TASK
exports.updateTask = (req, res) => {

  const { id } = req.params;

  const {
    title,
    description,
    status
  } = req.body;

  db.query(
    `UPDATE tasks
     SET title=?,
         description=?,
         status=?
     WHERE id=?`,
    [
      title,
      description,
      status,
      id
    ],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Task Updated Successfully"
      });
    }
  );
};

// DELETE TASK
exports.deleteTask = (req, res) => {

  const { id } = req.params;

  db.query(
    "DELETE FROM tasks WHERE id=?",
    [id],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Task Deleted Successfully"
      });
    }
  );
};