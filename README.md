# Pickleball Pal

## Overview

Pickleball Pal allows users to find a local court and keep track of their
matches.

### Problem

Pickleball Finder and Scorekeeper is a web application designed for pickleball
enthusiasts. The application allows users to find nearby pickleball courts using
their current location and provides a convenient way to keep score during
matches. Users can log in, enter their opponents' names, keep track of scores in
real-time, and view game history after each match. It enhances the pickleball
playing experience by combining location-based services and match management in
one user-friendly platform. Also it's nice to have the receipts while talking a
bit of smack on the courts!

### User Profile

- Pickleball enthusiasts:
  - Looking for pickleball courts close to their current location
  - Looking for a convenient way to keep track of match scores
  - Wanting to maintain a history of their games for bragging rights and
    personal records

### Features

- As a user, I want to be able to find the closest pickleball courts near my
  current location.
- As a user, I want to be able to enter my opponents' names and keep score
  during a match. Need to be able to toggle a 2 person game vs. 4 person game
- As a user, I want to be able to view a history of all my matches, with scores
  saved after each game.
- As a user, I want to be able to filter the game history by date, opponents,
  win or loss.
- As a user, I want to be able to create an account to manage my match history
  and scores.
- As a user, I want to be able to log in to my account to manage my match
  history and scores.
- As a logged-in user, I want to be able to see the details of my past matches.
- As a logged-in user, I want to be able to update my profile information.
- As a logged-in user, I want to be able to log out of my account securely.
- As a logged-in user, I want to be able to delete any match records that I no
  longer want to keep.
- Ability to see all users ranked or see the ranking inside your group. Allows
  families and friends to make groups to compete.
- Award system. Create awards for accomplishments and also funny awards for
  those that are not doing the best.

## Implementation

### Tech Stack

- React
- Express
- MySQL
- Client Libraries:
  - axios
  - react-router
  - react
  - sass
  - chart.js
  - react-share
- Server Libraries:
  - express
  - knex.js
  - passport

### APIs

- Google Maps & Places API (https://mapsplatform.google.com/maps-products/ )

### SQL Structure

![Pickleball Pal SQL structure](https://github.com/Atay365/pickleball-pal/assets/86385162/fdf5e1c2-3bf4-4c81-bdca-c943615f0107)

### Sitemap

- Home page
- Find a Court
- Score & Game History
- Register
- Login
- Profile

### Mockups

#### Home Page

#### Find a Court

![Screen Shot 2024-06-25 at 21 56 52 PM](https://github.com/Atay365/pickleball-pal/assets/86385162/d56715ac-9bdd-4680-9cf8-c1667f52205d)

#### Score & Game History

![Screen Shot 2024-06-25 at 21 56 57 PM](https://github.com/Atay365/pickleball-pal/assets/86385162/717a4f6f-b708-48e1-92ec-1faa5f8a9a83)

#### Register

![Screen Shot 2024-06-25 at 21 57 03 PM](https://github.com/Atay365/pickleball-pal/assets/86385162/8198f220-0c28-4bec-8652-c3c9e3629642)

#### Login

![Screen Shot 2024-06-25 at 21 57 10 PM](https://github.com/Atay365/pickleball-pal/assets/86385162/3a7b43b3-194b-453f-a1e6-15bffabb980e)

#### Profile

![Screen Shot 2024-06-25 at 21 57 16 PM](https://github.com/Atay365/pickleball-pal/assets/86385162/df632744-65d3-4924-a340-e26ef4226cfd)

### Auth

Site will contain server-side authorization. Users will be required to register
an account and sign into their accounts. This will allow the users to be able to
keep track of all the logged matches tied to their account.

The username's will be the users email, and they will be required to create a
password that meets the guidelines provided.

## Roadmap

### Sprint 1:

Goal:

1. Set up project structure
2. Implement basic user authentication
3. Create the initial UI components

Task:

- Setup
  - initialize the project with React, Express, and MySQL
  - Set up all project files for client and server
  - Install all needed libraries
- User Auth
  - Set up use authentication using JWT or possibly Passport.js
  - Create registration and login endpoints on server
  - Create basic login and registration forms on client side with React
- Initial UI Components
  - Create the basic layout
  - Set up React Router for navigation
  - Set up routes to Home, Login, Register

### Sprint 2:

Goals:

1. Location-based pickleball court search
2. Create scorekeeping functionality
3. Develop the game history features

Task:

- Location-Based Search
  - integrate location services to get the user's location
  - Use Google Maps API (Places) to fetch nearby pickleball courts. 10mile
    radius
  - Use Google Maps API (Places) to display a map and the nearby pickleball
    court locations
- Scorekeeping
  - Create the UI for users to enter opponents' name and keep score
  - Add functionality to save match scores to the database and filters
- Game History
  - Develop feature to display the user's match history
  - Create the UI component
  - Set functionality to retrieve match history from the MySQL database

### Sprint 3:

Goals:

1. Refine UI/UX
2. Implement any additional features
3. Deploy?

Task:

- UI/UX Clean up
  - Improve the overall design as much as possible
  - Add responsiveness for tablet and desktop
- Additional Features (Coming Soon?)
  - User profile management
  - Ability to delete match records
  - Ability to filter match records
- Testing and Deployment
  - Test all functionality
  - Fix bugs found
  - Deploy the app
