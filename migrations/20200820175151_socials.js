exports.up = (knex) => {
    exports.up = (knex) => {
        return knex.schema.createTable('socials', (table) => {
            table.increments('id').primary()
            table.string('Facebook')
            table.string('Intagram')
            table.integer('Likedin')
            table.integer('PS4/Xbox')
            table.integer('GitHub')
            table.integer('Twitter')
            table.integer('user_id')


        })
    }


};

exports.down = function(knex) {

};