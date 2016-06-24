#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

window.FranklinSummerCoding =
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}
  initialize: -> Backbone.history.start()

$(document).ready -> FranklinSummerCoding.initialize()
