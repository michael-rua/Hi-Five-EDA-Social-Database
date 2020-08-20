exports.seed = function(knex, Promise) {
    return knex('socials').insert([
        {}
    ])
}