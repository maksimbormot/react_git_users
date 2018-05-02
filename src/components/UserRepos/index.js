import React from 'react';

import RepoRow from './RepoRow';

class UserRepos extends React.PureComponent {
  render() {
    const {repos} = this.props;
    return (
      <div className="col-xs-12 col-md-6">
        <h3 className="text-center">User Repos</h3>
        {
          repos.length === 0
            ?
            <h5 className="text-center">no have repos</h5>
            :
            <table className="table table-striped">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Language</th>
                <th scope="col">Created</th>
                <th scope="col">Updated</th>
                <th scope="col">Stars</th>
              </tr>
              </thead>
              <tbody>
              {
                repos.map((repo, i) => {
                  return (
                    <RepoRow
                      key={repo.id}
                      index={i + 1}
                      repo={repo}
                    />
                  )
                })
              }
              </tbody>
            </table>
        }
      </div>
    )
  }
}

export default UserRepos;

