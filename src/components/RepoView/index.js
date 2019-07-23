import React from 'react';

import { RepoContainer } from './style';

export default class RepoView extends React.Component {

  render() {
    const {repo} = this.props;
    return (
        <RepoContainer className="animated flipInY">
          <img src={repo.owner.avatar_url} alt={repo.owner.url} height="64px" />
          <h3>{repo.full_name}</h3>
        </RepoContainer>
    )
  }

}