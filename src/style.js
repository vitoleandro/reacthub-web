import styled from 'styled-components';

export const MainContainer = styled.main `
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: calc(100% - 200px);
  margin: 0 10%;
`

export const GridRow = styled.div `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`

export const GridColumn = styled.div `
  display: flex;
  flex-flow: column wrap;
  width: 25%;
  padding: 16px;
`