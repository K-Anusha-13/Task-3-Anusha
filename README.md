# Task-3-Database Integration (TaskFlow API)

TaskFlow API is a backend application. It uses Node.js, Express.js and MySQL. This project shows how to connect to a database perform CRUD operations keep data safe design a database schema and communicate with the database securely.

## Features

* MySQL Database Connection

* Create Tasks

* Get Tasks

* Get Task by ID

* Update Tasks

* Delete Tasks

* API Design

* Prevent SQL Injection

* JSON Responses

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

│ └── db.js

├── controllers/

│ └── taskController.js

├── routes/

│ └── taskRoutes.js

├── database/

│ └── schema.sql

├── Output Screenshots/

├──.env

├── server.js

├── package.json

└── README.md

```

## Database Schema

### Tasks Table

| Field | Type |

| ----------- | ----------------- |

| id | INT (Primary Key)

| title | VARCHAR(255)

| description | TEXT |

| status | ENUM |

| created_at | TIMESTAMP |

## API Endpoints

### Tasks

* GET /api/tasks to get all tasks

* GET /api/tasks/:id to get a task by ID

* POST /api/tasks to create a task

* PUT /api/tasks/:id to update a task

* DELETE /api/tasks/:id to delete a task

## Example of Creating a Task

* Send a POST request to /api/tasks with the following JSON data:

```json

{

"title": "Project 3"

"description": "Database Integration"

}

```

## Example Response

```json

{

"id": 1

"title": "Project 3"

"description": "Database Integration"

"status": "Pending"

}

```

## API Demonstration

### Application Startup & Database Connection

The application successfully starts and establishes a connection with the MySQL database.

![Application Startup](Output%20Screenshots/Output.png)

### Create Task Endpoint

To create a new task, send a POST request to `/api/tasks`.

![Create Task](Output%20Screenshots/POST%20api-tasks.png)

### Retrieve All Tasks Endpoint

To retrieve all tasks, send a GET request to `/api/tasks`.

![Retrieve Tasks](Output%20Screenshots/GET%20api-tasks.png)

### Retrieve Task By ID Endpoint

To retrieve a specific task, send a GET request to `/api/tasks/:id`.

![Retrieve Task By ID](Output%20Screenshots/GET%20api-tasks-id.png)

### Update Task Endpoint

To update an existing task, send a PUT request to `/api/tasks/:id`.

![Update Task](Output%20Screenshots/PUT%20api-tasks-id.png)

### Delete Task Endpoint

To delete a task, send a DELETE request to `/api/tasks/:id`.

![Delete Task](Output%20Screenshots/DELETE%20api-tasks-id.png)



## Important Concepts Learned

* Connecting to a database

* Designing a MySQL schema

* Performing CRUD operations

* Building RESTful APIs

* Using keys

* Persisting data

* Using environment variables

* Preventing SQL injection

* Building an architecture

## Author

Kummari Anusha
