# SecureAuthApp

SecureAuthApp is a web application for user authentication, built using Express.js and PostgreSQL. This application allows users to register, log in, and access a protected page upon successful authentication.

## Features

- **User Registration:** Allows users to create a new account with their email and password.
- **User Login:** Authenticates users and provides access to a protected page if the credentials are correct.
- **Password Validation:** Ensures users are notified if they attempt to register with an existing email or log in with incorrect credentials.

## Technologies Used

- **Node.js:** JavaScript runtime for server-side scripting.
- **Express.js:** Web framework for building the application server.
- **PostgreSQL:** Relational database management system for storing user data.
- **EJS:** Templating engine for rendering dynamic HTML pages.
- **body-parser:** Middleware to handle URL-encoded form data.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- PostgreSQL database installed and running.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/SecureAuthApp.git
   cd SecureAuthApp

2. Install dependencies:

   ```bash
   npm i express ejs pg body-parser

3. Set up your PostgreSQL database:

   - Create a database named Web Dev or update the db configuration in app.js to match your database name.
   - Create a table named userauth with columns email (VARCHAR) and password (VARCHAR).

4. Start the server:

   ```bash
   node index.js

## Usage

- Homepage: Navigate to the root URL (/) to view the home page.
- Register: Go to /register to create a new account.
- Login: Go to /login to log in with your credentials.
- Secrets Page: After logging in successfully, you will be redirected to the /secrets page.
