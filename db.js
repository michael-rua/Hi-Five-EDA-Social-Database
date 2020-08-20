const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getUser,
    getUsers,
    viewProfile,
    addProfile
}

function getUsers(db = connection) {
    return db('users').select()
}

function getUser(id, db = connection) {
    return db('users').where('id', id).first()
}

function viewProfile(id, db = connection) {
    return db('users')
        .join('profiles', 'users.id', 'profiles.user_id')
        .where('users.id', id)
        .select(
            'users.id as userId',
            'profiles.user_id as profileId',
            'name',
            'email',
            'url',
            'bio'
        )
        .then((result) => ({
            id: result[0].userId,
            name: result[0].name,
            email: result[0].email,
            url: result[0].url,
            bio: result[0].bio
        }))
}

function addProfile(name, email, url, bio, db = connection) {
    return db('users')
        .insert({ email, name })

    .then((result) => {
        console.log(result) // this result is just id from users table and it is a result of promises
        const user_id = result[0]
        return db('profiles').insert({ url, bio, user_id })
    })
}