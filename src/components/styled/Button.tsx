import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const StyledButton = styled.button<CardProps>`
  background: black;
  color: white;
  border-radius: 4px;
  padding: 12px;
`;

const Button = ({ children, ...props }: CardProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
