const 	mongoose = require('mongoose'),
		Player = require('./playerModel.js'),
		Schema = mongoose.schema;

const lossesSchema = new mongoose.Schema({
	video: String, // link to youtube video of match
	playerId: {type: String, required: true}, // Player who owns this loss
	characterLostTo: {type: String, required: true}, // Character lost to
	playerLostTo: String, // Player lost to
	characterUsed: {type: String, required: true}, // Character used
	game: {type: String, required: true}, // Predefined list of games
	tournament: String, // Predefined list of tournaments
	strengths: [String], // Predefined list of strengths shown in the Match
	weaknesses: [String] // Predefined list of weaknesses shown in the Match
})

module.exports = mongoose.model('Losses', lossesSchema);