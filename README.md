<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Management App</title>
</head>
<body>

  <h1>User Management App</h1>

  <p>
    This is a simple User Management application built with React. The app allows you to:
  </p>
  <ul>
    <li>Add new users</li>
    <li>Update existing users</li>
    <li>Delete users</li>
    <li>View the list of users</li>
  </ul>

  <p>
    The app communicates with a backend API to manage the user data and uses <strong>Axios</strong> for making API requests. <strong>Toastify</strong> notifications are used for displaying success and error messages.
  </p>

  <h2>Features</h2>
  <ul>
    <li><strong>Add User</strong>: You can add a new user by providing user details.</li>
    <li><strong>Edit User</strong>: You can edit the details of an existing user.</li>
    <li><strong>Delete User</strong>: You can delete a user from the list.</li>
    <li><strong>User List</strong>: Displays all the users stored in the backend.</li>
    <li><strong>Notifications</strong>: Toast notifications provide feedback on successful and failed operations.</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>React</strong>: Frontend library for building the user interface.</li>
    <li><strong>Axios</strong>: For making HTTP requests to the backend.</li>
    <li><strong>Toastify</strong>: For displaying notifications (success, error messages).</li>
    <li><strong>Tailwind CSS</strong>: For styling the components.</li>
    <li><strong>MongoDB</strong>: For storing user data.</li>
    <li><strong>Node.js / Express</strong>: Backend for handling API requests.</li>
  </ul>

  <h2>Installation</h2>

  <h3>Prerequisites</h3>
  <ul>
    <li><strong>Node.js</strong> and <strong>npm</strong> are required to run the project.</li>
    <li><strong>MongoDB Compass</strong> is needed to manage the MongoDB database locally.</li>
  </ul>

  <h3>Steps to Set Up the Project</h3>

  <h4>1. Clone the Repository</h4>
  <p>Start by cloning the repository to your local machine:</p>
  <pre><code>git clone <repository-url>
cd <repository-folder></code></pre>

  <h4>2. Install Backend Dependencies</h4>
  <p>Navigate to the backend folder and install the necessary dependencies for the backend:</p>
  <pre><code>cd backend
npm install</code></pre>

  <h4>3. Set Up MongoDB</h4>
  <ol>
    <li><strong>Install MongoDB Compass</strong>: If you haven't already, download and install <strong>MongoDB Compass</strong> from <a href="https://www.mongodb.com/products/compass">MongoDB Compass</a>.</li>
    <li><strong>Set Up MongoDB Database</strong>: 
      <ul>
        <li>Open <strong>MongoDB Compass</strong>.</li>
        <li>Connect to your MongoDB instance (default connection string is <code>mongodb://localhost:27017</code>).</li>
        <li>Create a new database (e.g., <strong>user_management</strong>).</li>
        <li>Inside the database, create a collection called <strong>users</strong>.</li>
      </ul>
    </li>
  </ol>

  <h4>4. Configure Backend API</h4>
  <ol>
    <li>Open the backend folder in your code editor (VS Code or similar).</li>
    <li>Update the database URL in the backend code (if necessary) to point to your local MongoDB instance. It should be something like:
      <pre><code>mongoose.connect("mongodb://localhost:27017/user_management");</code></pre>
    </li>
    <li>Start the backend API by running:
      <pre><code>npm start</code></pre>
    </li>
  </ol>

  <h4>5. Install Frontend Dependencies</h4>
  <p>Navigate to the frontend folder and install the necessary dependencies for the frontend:</p>
  <pre><code>cd frontend
npm install</code></pre>

  <h4>6. Run the Frontend</h4>
  <p>Start the React app:</p>
  <pre><code>npm start</code></pre>
  <p>This will start the React app on <strong>http://localhost:3000</strong>.</p>

  <h4>7. Test the Application</h4>
  <p>Open your browser and go to <strong>http://localhost:3000</strong>. You should be able to see the User Management application. You can add, edit, and delete users, and view the success/error notifications.</p>

  <h2>API Requirements</h2>
  <p>Ensure that the following API endpoints are running for this app to work correctly:</p>
  <ul>
    <li><strong>GET</strong> <code>/api/users</code> - Fetch the list of all users.</li>
    <li><strong>POST</strong> <code>/api/users</code> - Add a new user.</li>
    <li><strong>PUT</strong> <code>/api/users/:id</code> - Update an existing user.</li>
    <li><strong>DELETE</strong> <code>/api/users/:id</code> - Delete a user.</li>
  </ul>

  <p>Make sure your backend is running and accessible at <strong>http://localhost:5000</strong>.</p>

  <h2>App Structure</h2>
  <ul>
    <li><strong>src/</strong>: Contains the main React application code.
      <ul>
        <li><strong>components/</strong>: Contains the UI components (AddUserForm, UpdateUserForm, UserCard).</li>
        <li><strong>App.js</strong>: Main component where the user data is managed.</li>
      </ul>
    </li>
    <li><strong>backend/</strong>: Contains the Express.js backend for handling the API routes.
      <ul>
        <li><strong>models/</strong>: Contains MongoDB models (e.g., <strong>User.js</strong>).</li>
        <li><strong>routes/</strong>: Contains the Express.js routes for handling user-related requests.</li>
      </ul>
    </li>
  </ul>

  <h2>How to Use</h2>
  <ul>
    <li><strong>Add User</strong>: Click the "Add User" button, fill out the form with user details, and submit to add a new user.</li>
    <li><strong>Edit User</strong>: Click the "Edit" button on any user card to modify the user's information. The form will pre-populate with the current user data.</li>
    <li><strong>Delete User</strong>: Click the "Delete" button on any user card to remove the user from the list.</li>
    <li><strong>Notifications</strong>: Toast notifications will appear when an action succeeds or fails, providing user feedback.</li>
  </ul>

  

</body>
</html>

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