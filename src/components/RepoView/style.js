import styled from 'styled-components';

export const RepoContainer = styled.article `
  width: 100%;
  background: #15181C;
  border-radius: 12px;
  box-shadow: 0 12px 21px rgba(0,0,0,0.4)
`

export const RepoCardHeaderContainer = styled.div `
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 48px;
  padding: 16px;
`

export const RepoAvatar = styled.img `
  height: 48px;
  border-radius: 50%;
  border: 2px solid #50B0C9;
`

export const RepoInfo = styled.div `
  flex: 1;
  padding: 16px;
`

export const RepoInfoTitle = styled.h3 `
  padding: 0;
  font-size: 12px;
  font-weight: normal;
  color: #838B96;
`

export const RepoInfoText = styled.small `
  font-size: 10px;
  font-weight: bold;
  color: #38414E;
`

export const RepoDescription = styled.p `
  padding: 16px;
  color: #7A818B;
  font-size: 12px;
  line-height: 1.5;
  
`