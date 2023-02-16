import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: string;
}

export const Button = ({ text, color, ...props }: ButtonProps) => {
  return (
    <StyledButton color={color} {...props}>
      {text}
    </StyledButton>
  );
};

export const StyledButton = styled.button`
  font-size: 1.6rem;
  line-height: 1.6rem;
  padding: 1.5rem 2.5rem;
  border-radius: 3.6rem;
  background: #7214ff;
  color: ${({ color }) => color || "var(--color-white)"};
  border: none;
  cursor: pointer;
`;
