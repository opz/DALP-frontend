import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin-bottom: 20px;
  font-family: "Barlow", sans-serif;
  padding: ${props => props.padding || '0px'}
`;

const Card = ({ title, children, padding }) => (
  <StyledCard className="card" padding={padding}>
    {title && <div className="card-header">{title}</div>}
    {children}
  </StyledCard>
);

export default Card;
