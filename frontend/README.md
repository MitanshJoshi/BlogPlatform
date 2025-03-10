# Personal Blog Platform Frontend

## Overview
This is the frontend for the Personal Blog Platform, built using Next.js 14 with TypeScript. The application allows users to sign up, log in, and manage their blog posts. It features server-side rendering for the homepage and client-side routing for a seamless user experience.

## Project Structure
- **pages/**: Contains the main pages of the application.
  - **index.tsx**: Homepage that lists all blog posts.
  - **login.tsx**: Login page for user authentication.
  - **signup.tsx**: Sign-up page for new users.
  - **dashboard.tsx**: Private route for logged-in users to manage their posts.
  - **create-post.tsx**: Page for creating new blog posts.
  - **edit-post/[postId].tsx**: Dynamic route for editing existing blog posts.
  - **post/[postId].tsx**: Dynamic route for viewing individual blog posts.
  - **_app.tsx**: Custom App component for global styles and layout.

- **components/**: Contains reusable components.
  - **Layout.tsx**: Layout component for consistent page structure.
  - **PostList.tsx**: Component for displaying a list of blog posts.
  - **PostForm.tsx**: Form component for creating new blog posts.

- **styles/**: Contains CSS files for styling the application.
  - **globals.css**: Global CSS styles.
  - **Home.module.css**: CSS module styles specific to the homepage.

- **tsconfig.json**: TypeScript configuration file.
- **next.config.js**: Next.js configuration settings.
- **package.json**: Lists dependencies and scripts for the frontend application.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd personal-blog-platform/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Development Choices
- **Next.js**: Chosen for its server-side rendering capabilities and ease of use with React.
- **TypeScript**: Used for type safety and better developer experience.
- **CSS Modules**: Utilized for scoped styling to avoid conflicts.

## Commands
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
