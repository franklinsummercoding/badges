FranklinSummerCoding.Routers.Start = Backbone.Router.extend({

  initialize: function (app){
    this.mainApp = app;
  },

  routes: {
    "":"main"
  },

  main: function () {
  }
});
