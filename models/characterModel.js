const 	mongoose = require('mongoose'),
		Schema = mongoose.schema;


const characterSchema = new mongoose.Schema({
	img: String, // Character image
	name: String, // eg. goku
	game: String // eg. Dragonball Fighterz

})

module.exports = mongoose.model('Character', characterSchema);