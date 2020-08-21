exports.seed = (knex) => {
    return knex('socials').insert([
        { id: 1, facebook: 'Michael Rua', instagram: 'michaelrua', linkedIn: 'michaelrua', ps4_user: 'Aviator11', steam_user: 'randomsteam', xbox_user: 'xboc', github: 'michael-rua', twitter: '@michaeljrua', user_id: 1 },
        { id: 2, facebook: 'Bamboozled Baboon', instagram: 'Bamboozled Baboon', linkedIn: 'Bamboozled Baboon', ps4_user: 'Baboon', steam_user: 'babble', xbox_user: 'bambabs', github: 'Baboon', twitter: 'Bamboozled Baboon', user_id: 2 },
        { id: 3, facebook: 'Curious Capybara', instagram: 'Curious Capybara', linkedIn: 'Curious Capybara', ps4_user: 'Capybara', steam_user: 'Caps', xbox_user: 'capyman', github: 'Capybara', twitter: 'Curious Capybara', user_id: 3 }
    ])
}