const express = require('express'),
	  router = express.Router(),
	  Player = require('../models/playerModel.js'),
	  Loss = require('../models/lossesModel.js');

router.route('/:id')
	.post((req,res)=>{
		// Find the player who owns the Loss
		Player.findById(req.params.id, (err,found)=>{
			// Create a new loss 
			const playerLoss = {
				video: req.params.video,
				playerId: found.id,
				characterLostTo: req.params.characterLostTo,
				playerLostTo: req.params.playerLostTo,
				characterUsed: req.params.characterUsed,
				game: req.params.game,
				tournament: req.params.tournament,
				strengths: req.params.strengths,
				weaknesses: req.params.weaknesses
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