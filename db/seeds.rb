100.times do
  Person.create(name: Faker::Name.name,
                bio: Faker::Lorem.paragraph)
end