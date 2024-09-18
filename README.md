Form Submission App with MongoDB and Docker
STEPS TO RUN AND VIEW:
1. docker-compose up --build
2. enter data in the forms and submit    ----localhost:8080
3. backend and data information  -----localhost:3000/submission
4. go to mongoDB and ADD CONNECTION - give the IP address:27017 and CONNECT

This project is a complete web-based form submission system that allows users to submit their Name, Email, and Message. The data is stored in a MongoDB database, and the project is fully containerized using Docker for easy setup and deployment.

Table of Contents
Project Overview
Tech Stack
Getting Started
Project Structure
How It Works
Testing the Application
Viewing Data in MongoDB
Stopping the Application
Troubleshooting
Contributing
License
Project Overview
This project demonstrates how to create a simple form submission system using a frontend served by an Apache web server and a backend built using Express.js with MongoDB. The backend receives form submissions from users, stores the data in MongoDB, and allows you to retrieve stored form data via a custom API endpoint.

The entire system runs on Docker containers, making it easy to set up and deploy.

Tech Stack
Frontend: HTML, served via Apache HTTP server
Backend: Node.js (Express.js)
Database: MongoDB
Containerization: Docker and Docker Compose

Getting Started
Prerequisites
Ensure you have the following installed on your machine:
Docker: Install Docker
MongoDB Compass (optional, for inspecting MongoDB data): Download MongoDB Compass

Installation and Setup
Clone the repository:
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

Build and run the application using Docker Compose:
docker-compose up --build
This will start all the required services (frontend, backend, and MongoDB) with the following ports:
Frontend (Apache): localhost:8080
Backend (Express.js API): localhost:3000
MongoDB: localhost:27017

Stopping the Application
To stop all running containers, use:
docker-compose down

Project Structure
.
├── backend               # Backend code (Node.js with Express)
│   ├── server.js         # Handles form submissions and MongoDB interactions
│   ├── package.json      # Dependencies for the backend
│   ├── Dockerfile        # Dockerfile for backend
├── frontend              # Frontend code (HTML form served by Apache)
│   ├── index.html        # Simple HTML form
│   ├── Dockerfile        # Dockerfile for frontend
├── docker-compose.yml    # Docker Compose file to orchestrate services
└── README.md             # Project documentation

How It Works
Frontend: The frontend is a simple HTML form served via an Apache HTTP server. Users can enter their Name, Email, and Message into the form and submit it.

Backend: The backend is built using Node.js and Express.js. It exposes an API to handle form submissions via a POST request to /submit. The form data is saved in a MongoDB database.

MongoDB: MongoDB is used to store the submitted form data. Data is saved in a collection called forms inside the formData database.

API Endpoints
POST /submit: Handles form submissions. Data is validated and then stored in MongoDB.
GET /check-db: Retrieves all submitted forms from MongoDB.

Testing the Application
Accessing the Frontend
Once the containers are running, you can access the frontend form by navigating to:
http://localhost:8080
Submitting the Form
Fill out the form fields (Name, Email, Message).
Submit the form, and the data will be sent to the backend and stored in MongoDB.
Viewing Data via API
To view all submitted form data, use the following API endpoint:
http://localhost:3000/check-db
This will return a JSON response with all form data stored in MongoDB.

Viewing Data in MongoDB
You can use MongoDB Compass or the /check-db API route to view the submitted form data.
Using MongoDB Compass
Download and open MongoDB Compass.
Connect to MongoDB by entering the following URI:
mongodb://localhost:27017
Navigate to the formData database and open the forms collection. You will be able to see all the form submissions in a structured format.

Stopping the Application
To stop all services (frontend, backend, MongoDB), run:
docker-compose down
This will stop and remove all the Docker containers.

Troubleshooting
Cannot GET /submit:

If you see this message, it means you're trying to access the /submit route using a GET request in the browser. This route only supports POST requests from the form.
Form data not being saved:

Ensure the backend is connected to MongoDB. Check the backend logs with:
docker-compose logs backend
MongoDB not connecting:

Check if the MongoDB service is running. Use the following command to check logs:
docker-compose logs mongo
Cannot connect to MongoDB Compass:
Make sure MongoDB is running on localhost:27017. If you're running this on a remote server, replace localhost with the appropriate IP address.

Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are welcome!
