# Task-3 - Database Integration (TaskFlow API)

TaskFlow API is a RESTful backend application built using Node.js, Express.js, and MySQL. This project demonstrates database integration, CRUD operations, schema design, data persistence, and secure database communication using parameterized queries.

## Features

* MySQL Database Integration
* Create Tasks
* Retrieve Tasks
* Retrieve Task by ID
* Update Tasks
* Delete Tasks
* RESTful API Design
* SQL Injection Prevention
* Structured JSON Responses

## Technologies Used

* Node.js
* Express.js
* MySQL
* MySQL Workbench
* MySQL2
* JavaScript
* Postman

## Project Structure

```text
Task-3/
├── config/
│   └── db.js
├── controllers/
│   └── taskController.js
├── routes/
│   └── taskRoutes.js
├── database/
│   └── schema.sql
├── Output Screenshots/
├── .env
├── server.js
├── package.json
└── README.md
```

## Database Schema

### Tasks Table

| Field       | Type         | Description                     |
| ----------- | ------------ | ------------------------------- |
| id          | INT          | Primary Key, Auto Increment     |
| title       | VARCHAR(255) | Task Title                      |
| description | TEXT         | Task Description                |
| status      | ENUM         | Pending, In Progress, Completed |
| created_at  | TIMESTAMP    | Creation Date & Time            |

## API Endpoints

### Tasks

* GET /api/tasks - Retrieve all tasks
* GET /api/tasks/:id - Retrieve a task by ID
* POST /api/tasks - Create a new task
* PUT /api/tasks/:id - Update an existing task
* DELETE /api/tasks/:id - Delete a task

## Example of Creating a Task

Send a POST request to `/api/tasks` with the following JSON data:

```json
{
  "title": "Project 3",
  "description": "Database Integration"
}
```

## Example Response

```json
{
  "id": 1,
  "title": "Project 3",
  "description": "Database Integration",
  "status": "Pending"
}
```

## API Demonstration

### Application Startup & Database Connection

The application successfully starts and establishes a connection with the MySQL database.

![Application Startup](Task-3/Output%20Screenshots/Output.png)

### Create Task Endpoint

Creates a new task by sending a POST request to `/api/tasks`.

![Create Task](Task-3/Output%20Screenshots/POST%20api-tasks.png)

### Retrieve All Tasks Endpoint

Retrieves all tasks stored in the database using a GET request to `/api/tasks`.

![Retrieve Tasks](Task-3/Output%20Screenshots/GET%20api-tasks.png)

### Retrieve Task By ID Endpoint

Retrieves a specific task using a GET request to `/api/tasks/:id`.

![Retrieve Task By ID](Task-3/Output%20Screenshots/GET%20api-tasks-id.png)

### Update Task Endpoint

Updates an existing task using a PUT request to `/api/tasks/:id`.

![Update Task](Task-3/Output%20Screenshots/PUT%20api-tasks-id.png)

### Delete Task Endpoint

Deletes a task using a DELETE request to `/api/tasks/:id`.

![Delete Task](Task-3/Output%20Screenshots/DELETE%20api-tasks-id.png)

## Important Concepts Learned

* Database Integration
* MySQL Schema Design
* CRUD Operations
* RESTful API Development
* Primary Keys and Database Constraints
* Data Persistence
* Environment Variables
* Parameterized Queries
* SQL Injection Prevention
* Modular Backend Architecture

## Author

Kummari Anusha
