exports.up = (knex) => {
    return knex.schema.createTable('socials', (table) => {
        table.increments('id').primary()
        table.string('facebook')
        table.string('instagram')
        table.string('linkedIn')
        table.string('ps4_user')
        table.string('steam_user')
        table.string('xbox_user')
        table.string('github')
        table.string('twitter')
        table.string('bio')
        table.integer('user_id').references('users.id')
    })
}

exports.down = (knex) => {
    return knex.schema.dropTable('socials')
}