

User Management App
===================

This is a simple User Management application built with React. The app allows you to:

*   Add new users
*   Update existing users
*   Delete users
*   View the list of users

The app communicates with a backend API to manage the user data and uses **Axios** for making API requests. **Toastify** notifications are used for displaying success and error messages.

Features
--------

*   **Add User**: You can add a new user by providing user details.
*   **Edit User**: You can edit the details of an existing user.
*   **Delete User**: You can delete a user from the list.
*   **User List**: Displays all the users stored in the backend.
*   **Notifications**: Toast notifications provide feedback on successful and failed operations.

Technologies Used
-----------------

*   **React**: Frontend library for building the user interface.
*   **Axios**: For making HTTP requests to the backend.
*   **Toastify**: For displaying notifications (success, error messages).
*   **Tailwind CSS**: For styling the components.
*   **MongoDB**: For storing user data.
*   **Node.js / Express**: Backend for handling API requests.

Installation
------------

### Prerequisites

*   **Node.js** and **npm** are required to run the project.
*   **MongoDB Compass** is needed to manage the MongoDB database locally.

### Steps to Set Up the Project

#### 1\. Clone the Repository

Start by cloning the repository to your local machine:

    git clone 
    cd 

#### 2\. Install Backend Dependencies

Navigate to the backend folder and install the necessary dependencies for the backend:

    cd backend
    npm install

#### 3\. Set Up MongoDB

1.  **Install MongoDB Compass**: If you haven't already, download and install **MongoDB Compass** from [MongoDB Compass](https://www.mongodb.com/products/compass).
2.  **Set Up MongoDB Database**:
    *   Open **MongoDB Compass**.
    *   Connect to your MongoDB instance (default connection string is `mongodb://localhost:27017`).
    *   Create a new database (e.g., **user\_management**).
    *   Inside the database, create a collection called **users**.

#### 4\. Configure Backend API

1.  Open the backend folder in your code editor (VS Code or similar).
2.  Update the database URL in the backend code (if necessary) to point to your local MongoDB instance. It should be something like:
    
        mongoose.connect("mongodb://localhost:27017/user_management");
    
3.  Start the backend API by running:
    
        npm start
    

#### 5\. Install Frontend Dependencies

Navigate to the frontend folder and install the necessary dependencies for the frontend:

    cd frontend
    npm install

#### 6\. Run the Frontend

Start the React app:

    npm start

This will start the React app on **http://localhost:3000**.

#### 7\. Test the Application

Open your browser and go to **http://localhost:3000**. You should be able to see the User Management application. You can add, edit, and delete users, and view the success/error notifications.

API Requirements
----------------

Ensure that the following API endpoints are running for this app to work correctly:

*   **GET** `/api/users` - Fetch the list of all users.
*   **POST** `/api/users` - Add a new user.
*   **PUT** `/api/users/:id` - Update an existing user.
*   **DELETE** `/api/users/:id` - Delete a user.

Make sure your backend is running and accessible at **http://localhost:5000**.

App Structure
-------------

*   **src/**: Contains the main React application code.
    *   **components/**: Contains the UI components (AddUserForm, UpdateUserForm, UserCard).
    *   **App.js**: Main component where the user data is managed.
*   **backend/**: Contains the Express.js backend for handling the API routes.
    *   **models/**: Contains MongoDB models (e.g., **User.js**).
    *   **routes/**: Contains the Express.js routes for handling user-related requests.

How to Use
----------

*   **Add User**: Click the "Add User" button, fill out the form with user details, and submit to add a new user.
*   **Edit User**: Click the "Edit" button on any user card to modify the user's information. The form will pre-populate with the current user data.
*   **Delete User**: Click the "Delete" button on any user card to remove the user from the list.
*   **Notifications**: Toast notifications will appear when an action succeeds or fails, providing user feedback.