const	express = require('express'),
		router = express.Router(),
		Player = require('../models/playerModel.js');

router.route('/')
	.get((req,res)=>{
		Player.find({},(err,foundPlayers)=>{
			res.send(foundPlayers)
		})
	})
	
module.exports = router;
