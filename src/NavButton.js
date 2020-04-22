import React from 'react';
import styled from 'styled-components';
import { Button, Container } from './uiElements';


const NavButtonSVG = styled.svg.attrs({
  viewBox: "0 0 24 24",
})`
  fill: inherit;
  display: block;
  width: 24.5px;
  padding: 9px;
`;

const NavButtonContainer = styled(Button)`
  fill: white;
  transition-duration: 0.2s;

  :hover {
    background-color: #162D40;
    fill: #1DA1F2;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px #9CDCFE;
  }
`;


export default function NavButton(props) {
  return (
    <Container padding="7px 0">
      <NavButtonContainer>
        <NavButtonSVG>
          <g>
            <path d={props.path} />
          </g>
        </NavButtonSVG>
      </NavButtonContainer>
    </Container>
  );
}
