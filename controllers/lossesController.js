const express = require('express'),
	  router = express.Router(),
	  Player = require('../models/playerModel.js'),
	  Loss = require('../models/lossesModel.js');

router.route('/:id')
	.get((req,res)=>{
		Player.findById(req.params.id,(err,foundPlayer)=>{
			res.send(foundPlayer.losses)
		})
	})
	.post((req,res)=>{
		// Find the player who owns the Loss
		Player.findById(req.params.id, (err,found)=>{
			// Create a new loss 
			const playerLoss = {
				video: req.body.video,
				playerId: found.id,
				characterLostTo: req.body.characterLostTo,
				playerLostTo: req.body.playerLostTo,
				characterUsed: req.body.characterUsed,
				game: req.body.game,
				tournament: req.body.tournament,
				strengths: req.body.strengths,
				weaknesses: req.body.weaknesses
			}
			Loss.create(playerLoss,(err,created)=>{
				// Push the created loss into the players list of losses
				found.losses.push(created);
				// Save the changed player
				found.save((err)=>{
					if (err) {
						return handleError(err)
					} else {
						let response = {
							success: true,
							player: found
						}
						res.send(response)
					}
				});
			})
		})
	})

module.exports = router;