const planets = require("../../models/planets.model")
// The controller contains the function that takes in the planets 
// that we require from the model and returns it as json
function getAllPlanets(req, res){
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets,
};