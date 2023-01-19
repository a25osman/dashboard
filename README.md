Developed by Awab Osman

# Mini-Project Description
This is a mock webpage for a vehicle dashboard built to demonstrate front-end development expertise. It displays vehicle metric data from badges stored in a json database. A REST API connects to the `dataStruct.json` file stored in the `/public/db` directory. The application was developed using Typescript, React, and Material UI.

This project has been deployed and is live on netlify. Open [https://dashboard-tecium.netlify.app/](https://dashboard-tecium.netlify.app/) to view it in the browser.

## Installation Option 01

If you have docker installed and running on your system, you can simply run a containerized version of this application using the command `docker-compose up` (Your system may require sudo access to run).

The application will be served on [http://localhost:3000](http://localhost:3000).

## Installation Option 02

To run this application locally:
- Ensure you have npm v6+ and Node v16+ running on your system (recommend using node version manager - nvm)
- run `git clone git@github.com:a25osman/dashboard.git`

Change into the project directory (`cd dashboard`), then follow the steps below:
- run `npm install` - This will install all required dependencies
- To start application run `npm start`
- The application will be served on [http://localhost:3000](http://localhost:3000).