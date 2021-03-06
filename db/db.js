const mongoose = require('mongoose');
const Players = require('../models/playerModel.js');
const dummyData = require('../models/dummydata.js');
const Characters = require('../models/characterModel.js');
const characterSeeds = require('../models/characterSeeds.js');

const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/competitiveAdvantage';

mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=>{
	console.log('Database connected on 27017');
})

mongoose.connection.on('disconnected', () => {
	console.log('database disconnected');
})

mongoose.connection.on('error', () => {
	console.log('there was an error connecting', error);
})

Players.find({}, (err, data) => {
	console.log(data.length + " player records in database")
	if(data.length == 0) {
		Players.collection.insertMany(dummyData, (err, data) => {
		    console.log("\n\n\ninserted " + data.insertedCount + " records");
		});
	}
})

Characters.find({}, (err, data) => {
	console.log(data.length + "character records in database")
	if(data.length == 0) {
		Characters.collection.insertMany(characterSeeds, (err, data) => {
		    console.log("\n\n\ninserted " + data.insertedCount + " records");
		});
	}
})