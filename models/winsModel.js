const 	mongoose = require('mongoose'),
		Player = require('./playerModel.js'),
		Schema = mongoose.schema;

const winsSchema = new mongoose.Schema({
	video: String, // link to youtube video of match
	player: {type: [Player.schema], required: true}, // Player who owns this win
	characterUsed: {type: String, required: true}, // Character Used to win
	playerBeat: {type: [Player.schema], required: true}, // Player Beat
	characterBeat: {type: String, required: true}, // Opponents character defeated
	game: {type: String, required: true}, // What game was it
	strengths: [String], // Predefined list of strengths shown in the match up
	weaknesses: [String], // Predefined list of weaknesses shown in the match up
	tournament: String // tournaments
})

module.exports = mongoose.model('Wins', winsSchema);