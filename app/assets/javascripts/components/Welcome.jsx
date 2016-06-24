Welcome = React.createClass({
  signIn(){
    $('.sign-in.modal').modal({
      detachable: false
    }).modal('show');
  },

  goToBadges(){
    location.href = '/badges'
  },

  render: function () {
    return (
      <div>
        <h1 className="ui header">
          Welcome to Franklin Summer Coding Academy!!!!
        </h1>

        <div className="ui button blue" onClick={this.goToBadges}>
          Badges
        </div>

        <div className="ui button green" onClick={this.signIn}>
          Sign In
        </div>
      </div>

    );
  }
})
