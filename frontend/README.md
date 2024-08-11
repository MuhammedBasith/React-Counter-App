# **Dynamic One-Page Website with React**

## **Project Overview**

This project features a dynamic one-page website built with React and a backend API using Node.js and Express. The website includes a banner with customizable content and a countdown timer. An internal dashboard allows for the management of the banner’s visibility, description, timer, and link. The backend integrates with a MySQL database to store and retrieve banner information.

## **Project Structure**

```
/frontend
  /src
    /components
      Banner.js
      Dashboard.js
      DashboardRoute.js
      Banner.css
      Dashboard.css
    App.js
    index.js
  .env
  package.json

/backend
  /src
    /controllers
      bannerController.js
    /models
      bannerModel.js
    /routes
      bannerRoutes.js
    app.js
  .env
  package.json
  schema.sql
```

## **Frontend**

### **Setup**

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file with the following content:**

    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

### **Components**

#### **Banner.js**

Displays the banner with a countdown timer and a clickable link.

#### **Dashboard.js**

Manages the banner settings including visibility, description, timer, and link.

#### **DashboardRoute.js**

Handles password protection before accessing the dashboard.

### **Styling**

#### **Banner.css**

Styles for the banner component.

#### **Dashboard.css**

Styles for the dashboard component.

## **Backend**

### **Setup**

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file with the following content:**

    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=banner_db
    PORT=5000
    ```

### **Backend Code**

#### **app.js**

Sets up the Express server and connects to the MySQL database.

#### **bannerModel.js**

Defines the database operations for managing banner data.

#### **bannerController.js**

Handles API requests related to banner management.

#### **bannerRoutes.js**

Defines the API routes for the banner.

### **Database Schema**

Create a `schema.sql` file with the following content to set up the database schema:

```sql
CREATE DATABASE banner_db;

USE banner_db;

CREATE TABLE banner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    timer INT,
    link VARCHAR(255),
    isVisible BOOLEAN
);

INSERT INTO banner (description, timer, link, isVisible) VALUES ('Welcome to our website!', 60, 'https://example.com', true);
```

## **Running the Project**

1. **Start the Backend Server**

    ```bash
    cd backend
    npm start
    ```

2. **Start the Frontend Development Server**

    ```bash
    cd frontend
    npm start
    ```

3. **Open your browser and visit** `http://localhost:3000` **to view the website.**

## **Features**

- **Banner Visibility:** Control the visibility of the banner on the main website.
- **Banner Content:** Update the banner's description, timer, and link from the dashboard.
- **Countdown Timer:** Display a countdown timer on the banner indicating how long it will remain visible.
- **Password Protection:** Access the dashboard only with the correct password.