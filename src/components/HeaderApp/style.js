import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

export const HeaderAppContainer = styled.header `
  display:                        flex;
  flex-flow:                      column wrap;
  justify-content:                center;
  align-items:                    center;
  width:                          100%;
  height:                         200px;
`

export const HeaderIcon         = styled.i `
  display:                        inline-block;
  width:                          140px;
  height:                         120px;
  background-image:               url(${logo});
  background-repeat:              no-repeat;
  background-position:            center center;
`

export const HeaderTitle        = styled.h3 `
  font-size:                      32px;
`
