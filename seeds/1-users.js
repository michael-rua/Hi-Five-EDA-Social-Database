exports.seed = (knex) => {
    return knex('users').insert([{
        id: 1,
        name: 'Michael Rua',
        email: 'michaelrua1@gmail.com',
        phone: '0211560222'
    }, {
        id: 2,
        name: 'Gideon Cooper',
        email: 'Gideon.cooper@hotmail.com',
        phone: '02108586647'
    }, {
        id: 3,
        name: 'Tatiana Bernon',
        email: 'tatiana.bernon@gmail.com',
        phone: '0273832501'
    }, {
        id: 4,
        name: 'Ben Mitchell',
        email: 'ben.mitchell11@hotmail.co.nz',
        phone: '0211497695'
    }])
}