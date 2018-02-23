const 	mongoose = require('mongoose'),
		Win = require('./winsModel.js'),
		Loss = require('./lossesModel.js'),
		Schema = mongoose.schema;


const playerSchema = new mongoose.Schema({
	name: String, // ex. Limbo
	alias: [String], // ex. EMPR TWISTED, Limbodawg, FishAndChips, EMPEROR_TWISTED
	strengths: [String], // ['Defense', 'Zoning', 'Patience', 'Clutch Factor' ] determined by algorithm that will weigh all this players percieved strengths vs hers/his weaknesses
	weaknesses: [String], // ['Offense','Set Play'] determined by algorithm that will weigh all this players percieved weaknesses vs his/hers percieved strengths 
	notes: [String], // ['Does not punish move x', 'Not up to date on DLC meta']
	games: [String], // ['Mortal Kombat 9', 'Injustice: Gods Among Us', 'Injustice 2', 'Mortal Kombat X', 'Dragonball FighterZ']
	losses: [Loss.schema], 
	wins: [Win.schema]
})

module.exports = mongoose.model('Player', playerSchema);