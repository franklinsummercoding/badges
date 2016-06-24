BadgeTable = React.createClass({
  newStudent(){
    $('#new-student')
    .transition('fade up')
    ;
  },

  newBadge(){
    $('#new-badge')
    .transition('fade up')
    ;
  },

  getHeads() {
    var newBadgeButton;
    if (this.props.user) {
      newBadgeButton =
      <div className="ui green button mini circle icon" onClick={this.newBadge}>
        <i className="plus icon" />
      </div>
    }
    return (
      <tr>
        <th>
          Badges
        </th>

        {
          this.props.info.badges.map(function(badge){

            return(
              <th key={badge.id} dataContent={badge.description} >
                {badge.title}
              </th>
            )
          })
        }

        <th>
          {newBadgeButton}
        </th>
      </tr>

    )
  },

  deleteStudent(e, student){
    var areYouSure = confirm('Are you sure?');

    if (areYouSure) {
      $.ajax({
        url: '/api/students/' + $(e.currentTarget).data('id'),
        type: 'DELETE',
        success: function (model, b, c) {
          this.props.parent.setState({
            info: model
          });

        }.bind(this)
      })
    }

  },

  deleteBadge(e, student){
    var areYouSure = confirm('Are you sure?');

    if (areYouSure) {
      $.ajax({
        url: '/api/badges/' + $(e.currentTarget).data('id'),
        type: 'DELETE',
        success: function (model, b, c) {
          this.props.parent.setState({
            info: model
          });

        }.bind(this)
      })
    }
  },


  render: function () {
    var newStudentButton;

    if (this.props.user) {
      newStudentButton =
      <div className="ui blue button mini circle icon" onClick={this.newStudent}>
        <i className="plus icon" />
      </div>
    }

    return (
      <div className="ui segment">
        <h1 className="ui header">
          Franklin Summer Coding!!!
        </h1>
        <table className="ui very basic collapsing celled fluid table">
          <thead>
            {this.getHeads()}
          </thead>

          <tbody>
            {
              this.props.info.students.map(function(student){
                var horizontalControl;

                if (this.props.user) {
                  horizontalControl = <div key={student.id} data-id={student.id} className="ui basic small button" onClick={this.deleteStudent}>
                    horizontal control
                  </div>
                }

                return(
                  <tr key={student.id}>
                    <td>
                      <h4 className="ui image header">
                        <img src={student.avatar} className="ui mini rounded image"/>
                        <div className="content">
                          {student.fname + " " + student.lname}
                          <div className="sub header">
                            Franklin Summer Coding
                          </div>
                        </div>
                      </h4>
                    </td>

                    {
                      this.props.info.badges.map(function(badge){
                        return(
                          <td key={badge.id}>
                            <Award user={this.props.user} bidge={badge} student={student} />
                          </td>
                        )
                      }.bind(this))
                    }
                    <td>
                      {horizontalControl}
                    </td>

                  </tr>
                )
              }.bind(this))
            }

          </tbody>

          <tfoot>
            <tr>
              <th>


                {newStudentButton}

              </th>

                {
                  this.props.info.badges.map(function(badge){
                    var verticalControl;

                    if (this.props.user) {
                      verticalControl = <div key={badge.id} data-id={badge.id} className="ui basic mini button" onClick={this.deleteBadge}>
                        vertical control
                      </div>
                    }

                    return(
                      <th>
                        {verticalControl}
                      </th>
                    )
                  }.bind(this))
                }

            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
})


StudentGenerator = React.createClass({
  checkForEnter(e){
    if (e.keyCode == 13) {

      var fname = $(ReactDOM.findDOMNode(this)).find('.fname').val();
      var lname = $(ReactDOM.findDOMNode(this)).find('.lname').val();

      $.ajax({
        url: '/api/students',
        type: 'POST',
        data: {
          student: {
            fname: fname,
            lname: lname
          }
        }, success: function (model, resp, resp) {

          this.props.parent.setState({
            info: model
          })

          $(ReactDOM.findDOMNode(this)).find('.fname').val("").focus();
          $(ReactDOM.findDOMNode(this)).find('.lname').val("");

        }.bind(this)
      })
    }
  },
  render() {
    return (
      <div id="new-student" className="transition hidden" onKeyDown={this.checkForEnter}>
        <div className="ui segment" style={{"width":"440px"}}>

          <div className="ui form small">
            <div className="two fields">

              <div className="field">
                <label>First Name</label>
                <input type="text" className="fname"/>
              </div>

              <div className="field">
                <label>Last Name</label>
                <input type="text" className="lname"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
})


BadgesGenerator = React.createClass({
  checkForEnter(e){
    if (e.keyCode == 13) {

      var title = $(ReactDOM.findDOMNode(this)).find('.title').val();
      var description = $(ReactDOM.findDOMNode(this)).find('.description').val();

      $.ajax({
        url: '/api/badges',
        type: 'POST',
        data: {
          badge: {
            title: title,
            description: description
          }
        }, success: function (model, resp, resp) {
          this.props.parent.setState({
            info: model
          })

          $(ReactDOM.findDOMNode(this)).find('.title').val("").focus();
          $(ReactDOM.findDOMNode(this)).find('.description').val("");
        }.bind(this)
      })
    }
  },

  render() {
    return (
      <div id="new-badge" className="transition hidden" onKeyDown={this.checkForEnter}>
        <div className="ui segment" style={{"width":"640px"}}>

          <div className="ui form small">
            <div className="two fields">

              <div className="four wide field">
                <label>Title</label>
                <input type="text" className="title" />
              </div>

              <div className="twelve wide field">
                <label>Description</label>
                <input type="text" className="description"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

Award = React.createClass({
  render: function() {
    var medal = emojione.shortnameToImage(":first_place_medal:")
    return (
      <div>
        {}
      </div>
    );
  }
})
