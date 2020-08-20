exports.seed = function(knex, Promise) {
    return knex('users').insert([
        { id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org', phone: 02164872938 },
        { id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org', phone: 02129509847 },
        { id: 99903, name: 'Curious Capybara', email: 'capybara@example.org', phone: 02129668408 },
    ])
}