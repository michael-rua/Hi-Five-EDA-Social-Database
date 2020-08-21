const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  viewProfile,
  addProfile
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function viewProfile (id, db = connection) {
  return db('users')
    .join('socials', 'users.id', 'socials.user_id')
    .where('users.id', id)
    .select(
      'users.id as userId',
      'socials.user_id as profileId',
      'name',
      'email',
      'phone',
      'facebook',
      'instagram',
      'linkedin',
      'ps4_user',
      'steam_user',
      'xbox_user',
      'github',
      'twitter'

    )
    .then(result => ({

      id: result[0].userId,
      name: result[0].name,
      email: result[0].email,
      phone: result[0].phone,
      facebook: result[0].facebook,
      instagram: result[0].instagram,
      linkedin: result[0].linkedIn,
      ps4_user: result[0].ps4_user,
      steam_user: result[0].steam_user,
      xbox_user: result[0].xbox_user,
      github: result[0].github,
      twitter: result[0].twitter,
      bio: bio[0].bio

    }))
}

function addProfile (name, email, phone, facebook, instagram, linkedin, ps4_user, steam_user, xbox_user, github, twitter, bio, db = connection) {
  return db('users')
    .insert({ email, name, phone })

    .then(result => {
      console.log(result) // this result is just id from users table and it is a result of promises
      const user_id = result[0]
      return db('socials').insert({ facebook, instagram, linkedin, ps4_user, steam_user, xbox_user, github, twitter, bio, user_id })
    })
}
