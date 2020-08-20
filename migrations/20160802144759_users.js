exports.up = (knex) => {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('email')
        table.integer('Phone')
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users')
}