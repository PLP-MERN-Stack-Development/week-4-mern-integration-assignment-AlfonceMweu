[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19952554&assignment_repo_type=AssignmentRepo)

# MERN Blog Application

A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js (MERN stack) featuring user authentication, CRUD operations for blog posts, and category management.

## Features Implemented

- **User Authentication**
  - Registration and login system
  - Protected routes for authenticated users
  - JWT token-based authentication

- **Blog Post Management**
  - Create, read, update, and delete blog posts
  - Rich text content support
  - Featured images for posts
  - Post categories and filtering

- **Category System**
  - Create and manage post categories
  - Filter posts by category

- **UI/UX Features**
  - Responsive design
  - Loading states and error handling
  - Optimistic UI updates
  - Form validation

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local instance or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-blog.git
   cd mern-blog

## Setup Instructions

### Set up the backend
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

Set up the frontend
bash
cd ../client
npm install
cp .env.example .env
# Edit .env if you need to change API base URL
Run the application
In one terminal (backend):

bash
cd server
npm run dev
In another terminal (frontend):

bash
cd client
npm run dev
Access the application
Frontend: http://localhost:5173

Backend API: http://localhost:5000

API Documentation
Authentication
Endpoint	Method	Description	Protected
/auth/register	POST	Register new user	No
/auth/login	POST	Login existing user	No
Blog Posts
Endpoint	Method	Description	Protected
/api/posts	GET	Get all posts	No
/api/posts	POST	Create new post	Yes
/api/posts/:id	GET	Get single post	No
/api/posts/:id	PUT	Update post	Yes
/api/posts/:id	DELETE	Delete post	Yes
Categories
Endpoint	Method	Description	Protected
/api/categories	GET	Get all categories	No
/api/categories	POST	Create new category	Yes
Request/Response Examples
Create Post (Authenticated)

json
// Request
{
  "title": "My First Post",
  "content": "This is the content...",
  "category": "64a1b2c3d4e5f6g7h8i9j0"
}

// Response (201 Created)
{
  "_id": "64a1b2c3d4e5f6g7h8i9j0",
  "title": "My First Post",
  "content": "This is the content...",
  "author": "64a1b2c3d4e5f6g7h8i9j1",
  "createdAt": "2023-07-01T12:00:00.000Z"
}
Environment Variables
Server (.env)

text
MONGODB_URI=mongodb://localhost:27017/mern-blog
JWT_SECRET=your_jwt_secret_key
PORT=5000
Client (.env)

text
VITE_API_BASE_URL=http://localhost:5000
Technologies Used
Frontend: React.js, Vite, React Router, Context API

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JWT, bcryptjs

Styling: CSS Modules (or your chosen framework)

License
This project is licensed under the MIT License - see the LICENSE file for details.

