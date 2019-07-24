import styled from 'styled-components';

export const SearchBar = styled.input `
  display: block;
  width: 40vw;
  height: 60px;
  border: none;
  margin-bottom: 14px;
  border-radius: 32px;  
  background: #15181C;
  box-shadow: 0 12px 21px rgba(25,29,34, 1);
  transition: all .3s ease-in-out;
  text-indent: 15px;
  font-size: 14px;
  color: #9CA1A7;

  &:hover { box-shadow: 0 0px 6px rgba(0,0,0,0.6) }
  &:focus { outline: 0; border: 2px solid #50B0C9; }
`

export const SearchBarResult = styled.div `
  display: block;
  width: 40vw;
`

export const SearchBarResultText = styled.span `
  position: relative;
  font-size: 12px;
  font-weight: bold;
  color: #60656B;
  margin-right: 24px;

  &:after {
    content: '';
    position: absolute;
    right: -16px;
    top: 5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #50B0C9;
  }
`

export const SearchBarResultCleanerBtn = styled.button `
  background: none;
  border: none;
  font-size: 12px;
  font-weight: bold;
  color: #60656B;
  border-bottom: #60656B;
  cursor: pointer;
  &:focus { outline: none; }
`

export const RepositoryList = styled.section `
  flex: 1;
  width: 100%;
  overflow: auto;
`
