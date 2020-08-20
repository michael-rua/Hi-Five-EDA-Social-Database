exports.seed = (knex) => {
  return knex('users').insert([
    { id: 1, name: 'michael rua', email: 'michaelrua1@gmail.com', phone: '0211560222' },
    { id: 2, name: 'Bamboozled Baboon', email: 'baboon@example.org', phone: '02129509847' },
    { id: 3, name: 'Curious Capybara', email: 'capybara@example.org', phone: '02129668408' }
  ])
}
