import React from 'react';

import User from './User'

class UsersList extends React.PureComponent {

  render() {
    const {users} = this.props;
    return (
      <div className="row paddingTop">
        {
          users.length !== 0 ?
            users.map(user => {
              return (
                <User
                  key={user.id}
                  user={user}
                />
              )
            })
            :
            <div>
              <h3 className="text-center">no users</h3>
            </div>
        }
      </div>
    )
  }
}

export default UsersList;
