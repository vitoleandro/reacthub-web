import React from "react";
import HeaderApp from '../../components/HeaderApp';
import RepoView from '../../components/RepoView';
import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';
import { GITHUB_TOKEN } from '../../services/Settings';
import Api from '../../services/Api';


import { MainContainer, GridRow, GridColumn } from '../../style';
import { SearchBar, RepositoryList, SearchBarResult, SearchBarResultText, SearchBarResultCleanerBtn } from './style';

const override = css`
    display: block;
    margin: 32px 0;
    border-color: red;
`;

export default class Home extends React.Component {

  state = {
    repositories: [],
    isLoading: false
  }

  searchRepository = async (e) => {
    let text = e.target.value;
    
    if(text.length >= 3) {
      this.setState({isLoading: true})
      const response = await Api.get('reactjs/repos', {
        headers: {'Authorization': `token ${GITHUB_TOKEN}`}
      });
      const { data } = response
      this.setState({repositories: data, isLoading: false})
    }
  }

  hideLoading = () => {
    this.setState({isLoading: false})
  }

  renderItem = (repo) => {
    return (
      <GridColumn key={repo.id}>
        <RepoView repo={repo} />
      </GridColumn>
    )
  };

  clearRepositories = () => {
    this.setState({repositories: []});
  }

  renderSearchedLength = (size) => {
    return(
      <SearchBarResult className="animated fadeIn delay-1s">
        <SearchBarResultText>Total de {size} items apresentados.</SearchBarResultText>
        <SearchBarResultCleanerBtn onClick={this.clearRepositories}>Limpar consulta</SearchBarResultCleanerBtn>
      </SearchBarResult>
    )
  }

  render() {

    return (
      <>
        <HeaderApp></HeaderApp>
        <MainContainer>
          <SearchBar onKeyUp={this.searchRepository} placeholder="Diretorio, usuário ..." />
          {this.state.repositories.length > 0 ? this.renderSearchedLength(this.state.repositories.length) : ''}
          <BarLoader
            css={override}
            sizeUnit={"px"}
            height={4}
            width={100}
            color={'#50B0C9'}
            loading={this.state.isLoading}
          />
          <RepositoryList>
            <GridRow>
              { this.state.repositories.map( (repo) =>  this.renderItem(repo)) }
            </GridRow>
          </RepositoryList>
        </MainContainer>
      </>
    )
  }

}
