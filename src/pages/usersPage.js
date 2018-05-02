import React from 'react';
import {connect} from 'react-redux';

import {
  getAllUsers,
  usersClear
} from '../actions/users';

import WrapLoader from '../components/WrapLoader';
import SearchLine from '../components/SearchLine';
import UsersList from '../components/UsersList';

class UsersPage extends React.Component {

  changeSearchName = name => {
    if (name) {
      this.props.dispatch(getAllUsers(name))
    } else {
      this.props.dispatch(usersClear())
    }
  };

  render() {
    const {
      users,
      loading
    } = this.props;

    return (
      <div>
        <SearchLine
          onChange={this.changeSearchName}
        />
        {
          loading ?
          <WrapLoader/>
          :
          <UsersList
            users={users}
          />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {users, loading} = state.users;
  return {
    users,
    loading
  }
}

export default connect(mapStateToProps)(UsersPage);
