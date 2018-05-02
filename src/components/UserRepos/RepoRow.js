import React from 'react';

import {formatDate} from '../../utils';

class RepoRow extends React.Component {
  render() {
    const {
      index,
      repo
    } = this.props;

    return (
      <tr>
        <th scope="row">{index}</th>
        <td>
          <p>
            <a href={repo.html_url} target='_blank'>{repo.name}</a>
          </p>
        </td>
        <td>
          {repo.language}
        </td>
        <td>
          {formatDate(repo.created_at)}
        </td>
        <td>
          {formatDate(repo.updated_at)}
        </td>
        <td>
          {repo.stargazers_count}
        </td>
      </tr>
    )
  }
}

export default RepoRow;
