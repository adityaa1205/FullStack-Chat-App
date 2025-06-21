# FullStack-Chat-App

A real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for live communication.

## Features and Functionality

-   **User Authentication:** Secure signup, login, and logout functionality.
-   **Real-time Messaging:** Send and receive text and image messages instantly using Socket.IO.
-   **Online Status:** See which users are online.
-   **Profile Management:** Update profile picture.
-   **Contact List:** View a list of available users to chat with.
-   **Theming:** Choose from a variety of themes to customize the app's appearance.
-   **Message Formatting:** Messages display the sender's profile picture and timestamp.
-   **Image Upload:** Upload and send images within the chat.

## Technology Stack

-   **Frontend:**
    -   React.js
    -   Vite
    -   Axios
    -   Zustand (for state management)
    -   React Router
    -   react-hot-toast
    -   lucide-react (icons)
    -   tailwindcss
    -   daisyui
    -   Socket.IO client
-   **Backend:**
    -   Node.js
    -   Express.js
    -   MongoDB
    -   Mongoose
    -   bcryptjs (for password hashing)
    -   jsonwebtoken (JWT for authentication)
    -   cookie-parser
    -   cors
    -   dotenv
    -   cloudinary (for image storage)
    -   Socket.IO server

## Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js (v18 or higher recommended)
-   npm or yarn
-   MongoDB

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/adityaa1205/FullStack-Chat-App.git
    cd FullStack-Chat-App
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Configure environment variables:**

    Create a `.env` file in the `backend` directory and add the following:

    ```
    PORT=5001
    MONGODB_URI=<Your MongoDB Connection String>
    JWT_SECRET=<Your JWT Secret>
    CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
    CLOUDINARY_API_KEY=<Your Cloudinary API Key>
    CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
    NODE_ENV=development # or production
    ```

    Replace the placeholders with your actual MongoDB connection string, JWT secret, and Cloudinary credentials.

4.  **Start the backend server:**

    ```bash
    npm run dev
    ```

    This command uses `nodemon` to automatically restart the server on file changes.  If you want to run in production mode you can build using `npm run build` and then start the server using `npm run start`.

5.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

6.  **Configure frontend environment variables:**

    Create a `.env` file in the `frontend` directory (if it doesn't exist) and ensure `VITE_MODE` is appropriately set:

    ```
    VITE_MODE=development #or production
    ```

7.  **Start the frontend development server:**

    ```bash
    npm run dev
    ```

    This starts the Vite development server.

## Usage Guide

1.  **Open the application:**

    Open your browser and navigate to `http://localhost:5173` (or the port your frontend server is running on).

2.  **Sign up or log in:**

    If you don't have an account, sign up. Otherwise, log in with your credentials.

3.  **Start chatting:**

    Select a user from the sidebar to start a conversation. Type your message in the input field and press Send or press enter.  You can upload images using the file input.

4.  **Update Profile:**

    Go to `/profile` and click the camera icon to upload a new profile picture.

5.  **Change Theme:**
    Go to `/settings` and select your desired theme.

## API Documentation

The backend API endpoints are as follows:

### Authentication Routes (`backend/src/routes/auth.route.js`)

-   `POST /api/auth/signup`: Registers a new user.
    -   Request body: `{ fullName, email, password }`
    -   Response: `{ _id, fullName, email, profilePic }` (and sets a `jwt` cookie)
-   `POST /api/auth/login`: Logs in an existing user.
    -   Request body: `{ email, password }`
    -   Response: `{ _id, fullName, email, profilePic }` (and sets a `jwt` cookie)
-   `POST /api/auth/logout`: Logs out the current user.
    -   Response: `{ message: "Logged out successfully" }` (and clears the `jwt` cookie)
-   `PUT /api/auth/update-profile`: Updates the user's profile picture. Requires authentication.
    -   Request body: `{ profilePic }` (base64 encoded image)
    -   Response: updated user object
-    `GET /api/auth/check`: Checks if the user is authenticated and returns user data. Requires authentication.
    -   Response: `{ _id, fullName, email, profilePic }`

### Message Routes (`backend/src/routes/message.route.js`)

-   `GET /api/messages/users`: Retrieves a list of users for the sidebar. Requires authentication.
    -   Response: `[{ _id, fullName, email, profilePic }]`
-   `GET /api/messages/:id`: Retrieves messages between the current user and the user with the given ID. Requires authentication.
    -   Response: `[{ senderId, receiverId, text, image, createdAt }]`
-   `POST /api/messages/send/:id`: Sends a new message to the user with the given ID. Requires authentication.
    -   Request body: `{ text, image }` (image is optional, base64 encoded)
    -   Response: `{ senderId, receiverId, text, image, createdAt }`

## Contributing Guidelines

Contributions are welcome! Here are the steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License Information

This project has no license specified.

## Contact/Support Information

For questions or support, please contact:

adityaa1205@gmail.com

```
