import React from 'react';
import RepoCardHeader from './RepoCardHeader';

import { RepoContainer, RepoDescription } from './style';

export default class RepoView extends React.Component {

  render() {
    const {repo} = this.props;
    return (
        <RepoContainer className="animated flipInY">
          <RepoCardHeader repo={repo}></RepoCardHeader>
          <RepoDescription>{repo.description}</RepoDescription>
        </RepoContainer>
    )
  }

}