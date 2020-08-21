const express = require('express')

const db = require('../db')

const router = express.Router()
router.get('/', (req, res) => {
  res.render('home')
})

router.get('/profiles', (req, res) => {
  db.getUsers()
    .then(users => {
      console.log(users)
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profiles/:id', (req, res) => {
  const id = Number(req.params.id)
  db.viewProfile(id)
    .then(viewData => {
      console.log(viewData)
      res.render('profiles', viewData)
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).send('Ohhh no an error: 500!')
    })
})

router.get('/addProfile', (req, res) => {
  res.render('newProfile')
})

router.post('/addProfile', (req, res) => {
  const { name, email, phone, facebook, instagram, linkedin, ps4_user, steam_user, xbox_user, github, twitter,} = req.body
  db.addProfile(name, email, phone, facebook, instagram, linkedin, ps4_user, steam_user, xbox_user, github, twitter,)
    .then(res.redirect('/profiles'))
    .catch(err => {
      console.log(err.message)
      res.status(500).send('Ohhh no an error: 500!')
    })
})

module.exports = router
