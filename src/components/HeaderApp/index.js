import React from 'react';
import { HeaderAppContainer, HeaderIcon, HeaderTitle } from './style';

export default class HeaderApp extends React.Component {

  render() {

    return(
      <HeaderAppContainer>
        <HeaderIcon />
        <HeaderTitle>ReactHub</HeaderTitle>
      </HeaderAppContainer>
    )

  }
  
}