import React from "react";
import styled from "styled-components";

export interface CardProps {
  title: string;
  content: string;
}

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
`;

const CardContent = styled.p`
  margin-top: 8px;
`;

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardWrapper>
  );
};

export default Card;
