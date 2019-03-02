import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/users';

class UsersPage extends Component {

  componentDidMount () {
    this.props.fetchUsers();
  }

  render () {
    return (
      <div>
        {this.props.users && this.props.users[0].name}
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  users: state.usersReducer.users
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
