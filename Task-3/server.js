require("dotenv").config();

const express = require("express");
const cors = require("cors");

require("./config/db");

const taskRoutes =
require("./routes/taskRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message:
      "TaskFlow API Running Successfully"
  });
});

app.use(
  "/api/tasks",
  taskRoutes
);

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("=================================");
  console.log(`🚀 Server Running On Port ${PORT}`);
  console.log(`🌐 API URL: http://localhost:${PORT}`);
  console.log("=================================");
});