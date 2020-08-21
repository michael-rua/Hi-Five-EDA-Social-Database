exports.seed = (knex) => {
    return knex('socials').insert([
        { id: 1, facebook: 'Michael Rua', instagram: 'michaelrua', linkedIn: 'michaelrua', ps4_user: 'Aviator11', steam_user: 'randomsteam', xbox_user: 'xboc', github: 'michael-rua', twitter: '@michaeljrua', user_id: 1 },
        { id: 2, facebook: 'Gideon Cooper', instagram: 'cooper.gideon', linkedIn: 'none', ps4_user: 'NehanaWallis', steam_user: 'finalstrike', xbox_user: 'none', github: 'gideon-cooper', twitter: 'none', user_id: 2 },
        { id: 3, facebook: 'Tatiana Bernon', instagram: 'Lepetitjacaranda', linkedIn: 'Tatiana Bernon', ps4_user: 'none, I have a nintendo', steam_user: 'none', xbox_user: 'capyman', github: 'tatiana-bernon', twitter: 'taty500Summers', user_id: 3 },
        { id: 4, facebook: 'Benpai Mitchell', instagram: 'bathbuckies', linkedin: 'none', ps4_user: 'none', steam_user: 'batista', xbox_user: 'Mister Man Sir7', github: 'benmitchell11',  twitter: 'lilgumboot', user_id: 3 }


    ])
}np