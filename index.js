// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Routes Controller
app.use('/places', require('./controllers/places'))
  
//Homepage
app.get('/', (req, res) => {
    res.render('home')
  })  

// 404 Page
app.get('*', (req, res) => {
  res.render('error404')
});

//listening for connections
app.listen(process.env.PORT)