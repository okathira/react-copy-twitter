import styled, { css } from 'styled-components';


const InputTextarea = styled.textarea`
  color: white;
  background-color: #00000000;
`;

const Button = styled.div.attrs({ role: "button" })`
  border-radius: 9999px;
  display: inline-block;
  background-color: rgb(29, 161, 242);
  padding: 5px 15px;
`;

const UserIcon = styled.img`
  border-radius: 50%;
  width: 49px;
`;

const Text = styled.span`
  color: white;
  overflow-wrap: anywhere;
  font-family: Arial;
  ${props => props.weight && css`
    font-weight: ${props.weight};
  `}
  ${props => props.size && css`
    font-size: ${props.size};
  `}
`;

const Container = styled.div`
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  ${props => props.padding && css`
    padding: ${props.padding};
  `}
`;

export { InputTextarea, Button, UserIcon, Text, Container };
