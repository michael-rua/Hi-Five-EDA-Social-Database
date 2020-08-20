exports.seed = (knex) => {
  return knex('socials').insert([
    { id: 1, facebook: 'Michael Rua', instagram: 'michaelrua', linkedIn: 'michaelrua', ps4_xbox: 'Aviator11', github: 'michael-rua', twitter: '@michaeljrua', user_id: 1 },
    { id: 2, facebook: 'Bamboozled Baboon', instagram: 'Bamboozled Baboon', linkedIn: 'Bamboozled Baboon', ps4_xbox: 'Baboon', github: 'Baboon', twitter: 'Bamboozled Baboon', user_id: 2 },
    { id: 3, facebook: 'Curious Capybara', instagram: 'Curious Capybara', linkedIn: 'Curious Capybara', ps4_xbox: 'Capybara', github: 'Capybara', twitter: 'Curious Capybara', user_id: 3 }
  ])
}
