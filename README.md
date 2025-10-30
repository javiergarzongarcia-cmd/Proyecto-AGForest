Route Planning App - Coding Challenge
Overview
Build a simple route planning application where users can create routes with multiple waypoints, save them, and view all saved routes with their calculated distances.

Stack: React, Python (Flask/FastAPI), PostgreSQL

Core Requirements
Backend (Python)
Create a REST API with the following endpoints:

1. Create a route
POST /api/routes
Request body:
{
  "name": "Morning Commute",
  "waypoints": [
    {"latitude": 40.7128, "longitude": -74.0060, "order": 1},
    {"latitude": 40.7580, "longitude": -73.9855, "order": 2},
    {"latitude": 40.7489, "longitude": -73.9680, "order": 3}
  ]
}
Response: Created route with ID and calculated total distance
2. List all routes
GET /api/routes
Response: Array of routes with basic info (id, name, waypoint count, total distance, created date)
3. Get route details
GET /api/routes/:id
Response: Complete route with all waypoints ordered correctly
Frontend (React)
1. Create Route Form
Input for route name
Dynamic waypoint inputs (latitude, longitude)
Add/remove waypoint buttons
Display calculated distance as waypoints are added
Submit button to save route
2. Route List View
Display all saved routes in a list/table
Show: name, number of waypoints, total distance
Click on a route to view details
3. Route Detail View
Show route name
List all waypoints in order
Display total distance
Back button to list view
Database Schema
CREATE TABLE routes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE waypoints (
  id SERIAL PRIMARY KEY,
  route_id INTEGER REFERENCES routes(id) ON DELETE CASCADE,
  latitude NUMERIC(10, 8) NOT NULL,
  longitude NUMERIC(11, 8) NOT NULL,
  order_index INTEGER NOT NULL
);
Distance Calculation
Calculate the total route distance by summing the distances between consecutive waypoints. You can use either:

Simple Pythagorean distance (acceptable for this exercise)
Haversine formula (bonus points for accuracy)
Bonus Points (Optional)
If you complete the core requirements and have time, implement as many as you can of the following:

🗺️ Map Visualization
Add a map (OpenLayers, Leaflet, or Mapbox) to visualize routes
Show waypoints as markers
Draw lines connecting waypoints
🛢️ PostGIS Integration
Upgrade to use PostGIS extension
Store waypoints as GEOGRAPHY(Point, 4326)
Use ST_MakeLine to create route geometry
Calculate distance using ST_Length(geography)
🔍 Proximity Search
Add endpoint: GET /api/routes/nearby?lat=X&lng=Y&radius=5000
Find routes that pass within a given radius (in meters) of a point
Use PostGIS ST_DWithin for accurate results
✨ Additional Features
Edit existing routes
Delete routes
Search/filter routes by name
Sort routes by distance or date
Basic tests (unit or integration)
Technical Requirements
Backend: Python 3.8+ with Flask or FastAPI
Frontend: React 18+ (use Create React App, Vite, or Next.js)
Database: PostgreSQL 12+
Code quality: Clean, readable code with basic error handling
Git: Commit your work with meaningful commit messages
What We're Looking For
Must Have
All core API endpoints working correctly
Routes and waypoints properly stored and retrieved
Distance calculation implemented
Functional React UI with proper state management
Database relationships and queries are correct
Basic error handling (e.g., validation, 404s)
Clear setup instructions
Nice to Have
Clean component structure
Input validation on both frontend and backend
Responsive design
Code comments where helpful
Any bonus features implemented
Submission
Create a private GitHub repository for your solution
Invite the following reviewers as collaborators:
@AntalAgForest
Email us at antal.bako@agforest.es with:
Subject: "Route Planning Challenge - [Your Name]"
Link to your repository
Time spent on the challenge
UPDATE: Please deploy your solution to any free hosting service of your choice.

Repository Structure
Your repository should include:

/backend - Python API code
/frontend - React application
/database - SQL schema files
README.md - Setup and run instructions
.gitignore - Exclude node_modules, venv, etc.
README Requirements
Include in your root README.md:

Prerequisites needed
Step-by-step setup instructions for database, backend, and frontend
How to run the application
List of features implemented (core + bonuses)
Any notes about your approach or trade-offs
Questions?
If you have any questions during the challenge, please email us at antal.bako@agforest.es. We'll respond within a few hours during business hours.

Good luck! We're excited to see what you build! 🚀