exports.up = (knex) => {
  return knex.schema.createTable('socials', (table) => {
    table.increments('id').primary()
    table.string('facebook')
    table.string('instagram')
    table.string('linkedIn')
    table.string('ps4_xbox')
    table.string('github')
    table.string('twitter')
    table.integer('user_id').references('users.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('socials')
}
