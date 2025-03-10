# Personal Blog Platform - Backend

## Overview
This is the backend for a personal blog platform built using Node.js and Express. The platform allows users to sign up, log in, and post articles. Users can view all posts and filter them by author.

## Project Structure
```
backend
├── src
│   ├── controllers        # Contains the logic for handling requests
│   │   ├── authController.js  # Handles user authentication
│   │   └── postController.js  # Manages blog posts
│   ├── models             # Defines data models
│   │   ├── userModel.js   # User model
│   │   └── postModel.js    # Post model
│   ├── routes             # Defines API routes
│   │   ├── authRoutes.js   # Authentication routes
│   │   └── postRoutes.js   # Post-related routes
│   ├── middleware         # Middleware functions
│   │   └── authMiddleware.js # JWT verification middleware
│   ├── utils              # Utility functions
│   │   └── jwtUtils.js    # JWT handling functions
│   ├── app.js             # Initializes the Express app
│   └── server.js          # Starts the server
├── package.json           # Lists dependencies and scripts
├── .env                   # Environment variables
└── README.md              # Documentation for the backend
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd personal-blog-platform/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory and add the necessary environment variables, such as:
   ```
   PORT=5000
   DATABASE_URL=<your-database-url>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the server:
   ```
   npm start
   ```

## API Endpoints
- **POST /signup**: Registers a new user with email and password.
- **POST /login**: Authenticates a user and returns a session token.
- **POST /post**: Allows authenticated users to post a new article.
- **GET /posts**: Retrieves all posts.
- **GET /posts?author=userId**: Retrieves posts by a specific author.
- **GET /posts/:postId**: Retrieves a single post by its ID.
- **PUT /posts/edit/:postId**: Allows authenticated users to edit a post by its ID.

## Security Considerations
- Passwords are securely hashed before storage.
- JWT tokens are used for authentication and authorization.
- Ensure that sensitive information is stored in the `.env` file and not hard-coded.

## Running Tests
To run tests, use the following command:
```
npm test
```

## License
This project is licensed under the MIT License.