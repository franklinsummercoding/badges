# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(name: "sam", password: ENV['password'])
User.create!(name: "dickbutt", password: ENV['password'])
User.create!(name: "gage", password: ENV['password'])
User.create!(name: "andrew", password: ENV['password'])
User.create!(name: "jenny", password: ENV['password'])
User.create!(name: "hobson", password: ENV['password'])
User.create!(name: "jonathan", password: ENV['password'])
User.create!(name: "randy", password: ENV['password'])
