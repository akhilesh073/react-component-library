import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export interface SpinnerProps {
  size?: number;
  color?: string;
}

const SpinnerContainer = styled.div<SpinnerProps>`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${({ color }) => color || "blue"};
  border-radius: 50%;
  width: ${({ size }) => size || 24}px;
  height: ${({ size }) => size || 24}px;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  return <SpinnerContainer size={size} color={color} />;
};

export default Spinner;
