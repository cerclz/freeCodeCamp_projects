const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config()

// Connect to database
const dbConnect = process.env['MONGO_URI']
mongoose.connect(dbConnect, { useNewUrlParser: true, useUnifiedTopology: true });
// Create Schema for users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
}, ({collection: 'users'}))
// Create model for users
let user = mongoose.model('user', userSchema);

// Create Schema for exercises
const exerSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: String
})
// Create model for exercises
let exercise = mongoose.model('exercise', exerSchema);

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// Save new user to db
app.post('/api/users', async (req, res) => {
  const username = await req.body.username;
  const newUser = new user({ username: username });
  newUser.save()
  const id = newUser._id;
  res.json({username: username, _id:id})
})

// Get all users from db
app.get('/api/users', async (req,res) => {
  const users = await user.find({}, '_id username')
  res.json(users)
})

// Save new exercise to db
app.post('/api/users/:_id/exercises/', async (req, res) => {
  // Get information from from and params
  let _id = await req.params._id
  let {description, duration, date} = await req.body
  // Check if date provided
  // If its not add today date
  if (!date){
    date = new Date().toDateString();
  } else {
    date = new Date(date).toDateString();
  }
  // Convert duration to number
  duration = parseInt(duration);
  // Get user information 
  const getUser = await user.findById(_id);
  let userExercise = new exercise({user_id: getUser._id, description, duration, date})
  userExercise.save()
  res.json({_id: getUser._id, username: getUser.username, date, duration, description})
})

app.get('/api/users/:_id/logs', async (req, res) => {
  // Get user id from params
  let {_id} = await req.params;
  // Get query params
  let limit = await parseInt(req.query.limit) || 10000;
  // Get user exercises and user info from db
  let log = await exercise.find({user_id: _id}, '-_id description duration date').limit(limit)
  let userInfo = await user.findById({_id})
  // Count exercises
  let count = log.length
  // Return json
  res.json({_id: userInfo._id, username: userInfo.username, count ,log})
})




const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
