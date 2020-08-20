exports.seed = (knex) => {
  return knex('users').insert([
    { id: 1, name: 'michael rua', email: 'michaelrua1@gmail.com', phone: 64211560222 },
    { id: 2, name: 'Bamboozled Baboon', email: 'baboon@example.org', phone: 642129509847 },
    { id: 3, name: 'Curious Capybara', email: 'capybara@example.org', phone: 642129668408 }
  ])
}
