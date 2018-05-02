import React from 'react';
import {Link} from 'react-router-dom'

class User extends React.PureComponent {
  render() {
    const {user} = this.props;
    return (
      <div className="col-xs-6 col-md-3 col-lg-2">
        <Link className="well clearfix block"
              to={`/user/${user.login}`}
        >
          <div className="col-xs-12">
            <img
              className="img-responsive"
              style={{width: '100%'}}
              src={user.avatar_url}
              alt={user.login}
            />
          </div>
          <p className="text-center">
            {user.login}
          </p>
        </Link>
      </div>
    )
  }
}

export default User;

