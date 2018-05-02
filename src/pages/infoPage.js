import React from 'react';
import {connect} from 'react-redux';

import {getUserData} from '../actions/userInfo';

import UserInfo from '../components/UserInfo';
import UserRepos from '../components/UserRepos';
import WrapLoader from '../components/WrapLoader';

class InfoPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUserData(this.props.match.params.name));
  }

  handleClickToHome = () => {
    this.props.history.push('/')
  };

  render() {
    const {user, repos, loading, error} = this.props;

    const getContent = () => {
      if (error) {
        return null
      } else {
        return (<div>
          <UserInfo
            user={user}
          />
          <UserRepos
            repos={repos}
          />
        </div>)
      }
    };

    return (
      <div className="row">
        <div className="navbar navbar-default">
          <div className="navbar-form">
            <button
              className="pull-left"
              onClick={this.handleClickToHome}
            >
              Home
            </button>
          </div>
        </div>
        {
          loading ?
            <WrapLoader/>
            :
            getContent()
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user, repos, loading, error} = state.userInfo;
  return {
    user,
    repos,
    loading,
    error
  }
}

export default connect(mapStateToProps)(InfoPage);
