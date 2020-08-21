exports.seed = (knex) => {
    return knex('users').insert([{
        
        name: 'Michael Rua',
        email: 'michaelrua1@gmail.com',
        phone: '0211560222'
    }, {
        
        name: 'Gideon Cooper',
        email: 'Gideon.cooper@hotmail.com',
        phone: '02108586647'
    }, {
        
        name: 'Tatiana Bernon',
        email: 'tatiana.bernon@gmail.com',
        phone: '0273832501'
    }, {
        
        name: 'Ben Mitchell',
        email: 'ben.mitchell11@hotmail.co.nz',
        phone: '0211497695'
    }])
}