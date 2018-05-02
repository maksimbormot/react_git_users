import React from 'react';

import {formatDate} from '../../utils';

class UserInfo extends React.PureComponent {
  render() {
    const {user} = this.props;
    return (
      <div className="col-xs-12 col-md-6">
        <h3 className="text-center">User Info</h3>
        <div className="well clearfix">
          <div className="col-xs-5">
            <img
              className="img-responsive"
              style={{width: '100%'}}
              src={user.avatar_url}
              alt={user.login}
            />
          </div>
          <div className="col-xs-5">
            <p>
              <b>Login:</b> <a href={user.html_url} target='_blank'>{user.login}</a>
            </p>
            <p>
              <b>Public repos:</b> {user.public_repos}
            </p>
            {
              user.location &&
              <p>
                <b>Location:</b> {user.location}
              </p>
            }
            {
              user.name &&
              <p>
                <b>Name:</b> {user.name}
              </p>
            }
            {
              user.email &&
              <p>
                <b>Email:</b> {user.email}
              </p>
            }
            {
              user.bio &&
              <p>
                <b>Bio:</b> {user.bio}
              </p>
            }
            {
              user.blog &&
              <p>
                <b>Blog:</b> <a href={user.blog} target='_blank'>Read...</a>
              </p>
            }
            <p>
              <b>Created:</b> {formatDate(user.created_at)}
            </p>
            <p>
              <b>Updated:</b> {formatDate(user.updated_at)}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfo;

