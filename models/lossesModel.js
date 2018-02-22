const 	mongoose = require('mongoose'),
		Player = require('./playerModel.js'),
		Schema = mongoose.schema;

const lossesSchema = new mongoose.Schema({
	video: String, // link to youtube video of match
	player: {type: [Player.schema], required: true}, // Player who owns this loss
	character: {type: String, required: true}, // Character used to win
	lostTo: [Player.schema], // Player lost to
	characterLostTo: {type: String, required: true}, // Character lost to
	game: {type: String, required: true}
	tournament: String, // Predefined list of tournaments
	strengths: [String], // Predefined list of strengths shown in the MU
	weaknesses: [String] // Predefined list of weaknesses shown in the MU
})

module.exports = mongoose.model('Losses', lossesSchema);