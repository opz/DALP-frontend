import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    margin-bottom: 20px;
    font-family: 'Barlow', sans-serif;
`;

const Card = ({ title, children }) => (
    <StyledCard className="card">
        <div className="card-header">
            {title}
        </div>
        {children}
    </StyledCard>
)

export default Card;