import styled, { css } from 'styled-components';
import React from 'react';


const Clicker = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  width: 60vw;
  max-width: 30em;
  border: 0;
  border-radius: .2em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  margin-left: 5px;
  background: ${props => props.primary ? "#1ea7fd" : "transparent"};
  box-shadow: ${props => props.primary ? "none" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};
  color: ${props => props.primary ? "white" : "#333"};

  ${({ size }) =>
        size === 'large' &&
        css`
          font-size: 16px;
          padding: 12px 24px;
        `}

  ${({ size }) =>
        size === 'medium' &&
        css`
          font-size: 14px;
          padding: 11px 20px;
        `}

  ${({ size }) =>
        size === 'small' &&
        css`
          font-size: 12px;
          padding: 10px 16px;
        `}
`;

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <Clicker
      size={size}
      primary={primary}
      type="button"
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </Clicker>
  );
};


export default Button
