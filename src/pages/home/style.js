import styled from 'styled-components';

export const SearchBar = styled.input `
  display: block;
  width: 40vw;
  height: 60px;
  border: none;
  margin-bottom: 32px;
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

export const RepositoryList = styled.section `
  display: flex;
  flex: 1;
  width: 100%;
  height: calc(100% - 40vw);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`
