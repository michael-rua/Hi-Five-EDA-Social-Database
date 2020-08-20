exports.seed = function(knex, Promise) {
    return knex('socials').insert([
        { id: 77701, facebook: 'Ambitious Aardvark', Instagram: 'Ambitious Aardvark', LinkedIn: 'Ambitious Aardvark', ps4Xbox: "Aardvark123", Github: "Aardvark", Twitter: 'Ambitious Aardvark', user_id: 1, },
        { id: 77702, facebook: 'Bamboozled Baboon', Instagram: 'Bamboozled Baboon', LinkedIn: 'Bamboozled Baboon', ps4Xbox: "Baboon", Github: "Baboon", Twitter: 'Bamboozled Baboon', user_id: 2, },
        { id: 77703, facebook: 'Curious Capybara', Instagram: 'Curious Capybara', LinkedIn: 'Curious Capybara', ps4Xbox: "Capybara", Github: "Capybara", Twitter: 'Curious Capybara', user_id: 3, }
    ])
}