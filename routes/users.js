const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getUsers()
        .then((users) => {
            res.render('index', { users: users })
        })
        .catch((err) => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

router.get('/profiles/:id', (req, res) => {
    const id = Number(req.params.id)
    db.viewProfile(id)
        .then((viewData) => {
            console.log(viewData)
            res.render('profiles', viewData)
        })
        .catch((err) => {
            console.log(err.message)
            res.status(500).send('Ohhh no an error: 500!')
        })
})

router.get('/addProfile', (req, res) => {
    res.render('newProfile')
})

router.post('/addProfile', (req, res) => {
    const { name, email, bio, url } = req.body
    db.addProfile(name, email, url, bio)
        .then(res.redirect('/'))
        .catch((err) => {
            console.log(err.message)
            res.status(500).send('Ohhh no an error: 500!')
        })
})

module.exports = router