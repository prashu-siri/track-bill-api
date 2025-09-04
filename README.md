# Track Bill API

## Overview
The Track Bill API is a Node.js application that connects to a PostgreSQL database to manage and track bills. It provides a RESTful interface for creating, fetching, and listing bills.

## Features
- Create a new bill
- Retrieve a specific bill by ID
- List all bills

## Technologies Used
- Node.js
- Express
- PostgreSQL
- dotenv

## Project Structure
```
track-bill-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── db
│   │   └── index.js          # Database connection logic
│   ├── controllers
│   │   └── billController.js  # Controller for bill-related operations
│   ├── routes
│   │   └── billRoutes.js      # Routes for bill operations
│   └── models
│       └── bill.js            # Bill model definition
├── package.json               # NPM configuration file
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/track-bill-api.git
   cd track-bill-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your PostgreSQL database connection details:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

4. Start the application:
   ```
   npm start
   ```

## API Endpoints
- **POST /bills**: Create a new bill
- **GET /bills/:id**: Retrieve a bill by ID
- **GET /bills**: List all bills

## Usage Examples
- To create a new bill, send a POST request to `/bills` with the bill details in the request body.
- To retrieve a bill, send a GET request to `/bills/:id` where `:id` is the ID of the bill.
- To list all bills, send a GET request to `/bills`.

## License
This project is licensed under the MIT License.