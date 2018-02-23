const 	express = require('express'); 
const	app = express();	
const	bodyParser = require('body-parser');
const	methodOverride = require('method-override');
// const	port = process.env.PORT || 3322;
const	port = 3322;
const 	mongoUri = 'mongodb://localhost:27017/competitiveAdvantage';

// require('dotenv').config();

// db
require('./db/db.js')
// middleware
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

// controllers
const PlayerController = require('./controllers/playerController.js');
app.use('/player/', PlayerController);

app.get('/',(req,res)=>{
	res.send('/user/login');
})

app.get('*',(req,res)=>{
	res.status(404).send('404')
})

app.listen(port,()=>{
	console.log('listening on ' + port);
})