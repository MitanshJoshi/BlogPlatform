# Personal Blog Platform

## Overview
This project is a personal blog platform that allows users to sign up, log in, and post articles. Users can view all posts and filter them by author. The backend is built using Node.js and Express, while the frontend utilizes Next.js 14 with TypeScript.

## Project Structure
The project is divided into two main parts: the backend and the frontend.

### Backend
- **src/**: Contains the source code for the backend.
  - **controllers/**: Contains the logic for handling requests and responses.
    - `authController.js`: Handles user authentication (signup and login).
    - `postController.js`: Manages blog posts (creating, retrieving and editing posts).
  - **models/**: Defines the data models for the application.
    - `userModel.js`: Defines the User model.
    - `postModel.js`: Defines the Post model.
  - **routes/**: Contains the route definitions for the application.
    - `authRoutes.js`: Defines authentication routes.
    - `postRoutes.js`: Defines post-related routes.
  - **middleware/**: Contains middleware functions for authentication.
    - `authMiddleware.js`: Verifies JWT tokens and protects routes.
  - **utils/**: Contains utility functions.
    - `jwtUtils.js`: Functions for generating and verifying JWT tokens.
  - `app.js`: Initializes the Express application and sets up middleware.
  - `server.js`: Starts the server and listens on a specified port.
- `package.json`: Lists the dependencies and scripts for the backend.
- `.env`: Contains environment variables for configuration.
- `README.md`: Documentation for the backend.

### Frontend
- **pages/**: Contains the pages of the application.
  - `index.tsx`: Homepage that lists all blog posts.
  - `login.tsx`: Login page for user authentication.
  - `signup.tsx`: Sign-up page for new users.
  - `dashboard.tsx`: Private route for logged-in users to manage posts.
  - `create-post.tsx`: Page for creating new blog posts.
  - `edit-post/[postId].tsx`: Dynamic route for editing existing blog posts.
  - `post/[postId].tsx`: Dynamic route for viewing individual blog posts.
  - `_app.tsx`: Custom App component for global styles and layout.
- **components/**: Contains reusable components.
  - `Layout.tsx`: Layout component for consistent page structure.
  - `PostList.tsx`: Component for displaying a list of blog posts.
  - `PostForm.tsx`: Form component for creating new blog posts.

- **styles/**: Contains CSS files for styling.
  - `globals.css`: Global CSS styles.

- `tsconfig.json`: TypeScript configuration file.
- `next.config.js`: Configuration settings for Next.js.
- `package.json`: Lists the dependencies and scripts for the frontend.
- `README.md`: Documentation for the frontend.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd personal-blog-platform
   ```

2. Set up the backend:
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file and add your environment variables (e.g., database connection string, JWT secret).
   - Start the backend server:
     ```
     npm start
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend development server:
     ```
     npm run dev
     ```

## Commands
- To run the backend: `npm start`
- To run the frontend: `npm run dev`

## Evaluation Criteria
- Code quality and clarity.
- Adherence to modern JavaScript and TypeScript best practices.
- Security considerations, especially in authentication and session management.
- Proper use of Next.js features like SSR and static generation.
- Responsive and user-friendly interface.