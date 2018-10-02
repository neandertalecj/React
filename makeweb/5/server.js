const express = require('express')

const app = express()

app.use(express.static('public'))

app.use(function log (req, res, next) {
    console.log([req.method, req.url].join(' '))
    next()
  })

app.listen(3000, () => console.log('Listening on 3000...'))
