# GithubOauth2
 
 Step-by-Step Guide
 ------------------

1. Set Up Your Environment
Ensure you have Node.js and npm installed. Create a new directory for your project and initialize it with npm:

download the package and open ternimal then run:
npm init -y

2. Install Dependencies
Install the necessary packages:

npm install express mongoose passport passport-github2 express-session dotenv

3. Create Directory Structure
Create the following directory structure:

oauth2-app/
├── models/
│   └── user.js
├── controllers/
│   └── authController.js
├── routes/
│   └── authRoutes.js
├── config/
│   └── passport.js
├── app.js
└── .env
