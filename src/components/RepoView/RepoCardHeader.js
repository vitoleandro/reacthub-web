import React from 'react';
import { 
  RepoCardHeaderContainer,
  RepoAvatar,
  RepoInfo,
  RepoInfoTitle,
  RepoInfoText
} from './style';

export default class RepoCardHeader extends React.Component {
  render() {
    const { repo } = this.props;
    return(
      <RepoCardHeaderContainer>
        <RepoAvatar src={repo.owner.avatar_url} alt={repo.owner.url} />
        <RepoInfo>
          <RepoInfoTitle>{repo.full_name}</RepoInfoTitle>
          <RepoInfoText>{repo.full_name}</RepoInfoText>
        </RepoInfo>
      </RepoCardHeaderContainer>
    )
  }
}
