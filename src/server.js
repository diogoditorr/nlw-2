// Server
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses,  saveClasses } = require('./pages')


// nunjucks configuration (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Init and server configuration
server
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses) 
    .post('/save-class', saveClasses)
    .listen(5500);
