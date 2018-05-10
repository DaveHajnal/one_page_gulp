const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const header = require('./mock/header')
const jumbotron = require('./mock/jumbotron')
const introducing = require('./mock/introducing')
const carousel = require('./mock/carousel')
const team = require('./mock/team')
const client = require('./mock/client')
const getInTouch = require('./mock/get-in-touch')
const article = require('./mock/article')

const app = express()
const handlebars = hbs.create({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: path.join(__dirname, '/views/layouts/')
})

app.engine('hbs', handlebars.engine)

// Todo miért esik szét ha benne marad a régi megoldás, ez így nem jó régi:
// app.use(express.static(__dirname + '/dist/'))

app.use(express.static(__dirname))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
  res.render('index', {
    headerElements: header.headerElements,
    jumbotronElements: jumbotron.jumbotronElements,
    introducingElements: introducing.introducingElements,
    carouselElements: carousel.carouselElements,
    teamElements: team.teamElements,
    clientElements: client.clientElements,
    getInTouchElements: getInTouch.getInTouchElements,
    articleElements: article.articleElements
  })
})

app.listen(8080)
