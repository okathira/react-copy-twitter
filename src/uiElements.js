import React from 'react';
import styled, { css } from 'styled-components';
import { borderStyle } from './themeStyles';
import TextareaAutosize from '@bit/mui-org.material-ui.textarea-autosize';


const InputTextarea = props => {
  return (
    <TextareaAutosize
      className={props.className}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
      style={{
        color: "white",
        backgroundColor: "#00000000",
        resize: "none",
        boxSizing: "border-box",
        width: "100%",
        border: "none",
        outline: "none",
        fontFamily: "Arial",
        fontSize: (props.size || "inherit"),
        ...props.style,
      }}
    />
  );
};


const Button = styled.button`
  border-radius: 9999px;
  border: none;
  background-color: rgb(29, 161, 242);
  padding: 5px 15px;
  transition-duration: 0.1s;
  outline: none;

  :hover {
    background-color: #1A91DA;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px #9CDCFE;
  }

  > * {
    user-select: none;
  }
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

const ContentContainer = styled.div`
  padding: 10px;
  display: flex;
  outline: none;
  align-items: stretch;
  border-bottom: 1px ${borderStyle};
`;

const Container = styled.div`
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  ${props => props.padding && css`
    padding: ${props.padding};
  `}
  ${props => props.maxWidth && css`
    width: 100%;
  `}
`;

export { InputTextarea, Button, UserIcon, Text, Container, ContentContainer };
