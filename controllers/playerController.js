const	express = require('express'),
		router = express.Router(),
		Player = require('../models/playerModel.js'),
		Character = require('../models/characterModel.js');

router.route('/')
	.get((req,res)=>{
		Player.find({},(err,foundPlayers)=>{
			res.send(foundPlayers)
		})
	})

router.route('/:game')
	.get((req,res)=>{
		Player.find({games: req.params.game},(err,foundPlayers)=>{		
			Character.find({game: req.params.game},(err,foundCharacters)=>{
				let response = {
					players: foundPlayers,
					characters: foundCharacters
				}
				res.send(response)
			})
		})
	})
	
module.exports = router;
