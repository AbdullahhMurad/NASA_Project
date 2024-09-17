const express = require("express");

const { getAllPlanets, } = require("./planets.controller");

const planetsRouter = express.Router(); // Here we define all of our routes

planetsRouter.get("/planets", getAllPlanets);
// We're going to handle these get requests to /planets 
// with some function that we're going to call getAllPlanets
// getAllPlanets will be handled in the planets controller
// The controller takes in actions and requests from the user
// and works with them to update the models

// In order to use the router, we must export it from this module 
// so that we can make use of it in our App.js
// which has all of our express middleware
// Note: Our router is just a type of middleware that
//       groups together related routes

module.exports = planetsRouter;
// require it in app.js