Main = React.createClass({
  getInitialState() {
    var generators;

    if (this.props.user) {
      generators = [
       <StudentGenerator key="StudentGenerator" parent={this} />,
       <BadgesGenerator key="BadgesGenerator" parent={this} />
      ]
    }

    return ({
      info: {
        students: this.props.application.students,
        badges: this.props.application.badges,
      },
      generators: generators

    })
  },

  componentDidMount(){
    this.setState({
      router: new FranklinSummerCoding.Routers.Start(this)
    })
  },

  render() {
    return (
      <div>
        <BadgeTable info={this.state.info} parent={this} user={this.props.user}/>
        {this.state.generators}
      </div>
    );
  }
});
