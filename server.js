const 	express = require('express'); 
const	app = express();	
const	bodyParser = require('body-parser');
const	methodOverride = require('method-override');
const	port = process.env.PORT || 3322;

require('dotenv').config();

// db
require('./db/db.js')
// middleware
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// controllers
const PlayerController = require('./controllers/playerController.js');
app.use('/player/', PlayerController);

const LossesController = require('./controllers/lossesController.js');
app.use('/loss/', LossesController);

app.get('/',(req,res)=>{
	res.send('success');
})

app.get('*',(req,res)=>{
	res.status(404).send('404')
})

app.listen(port,()=>{
	console.log('listening on ' + port);
})