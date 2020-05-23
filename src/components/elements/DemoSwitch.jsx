import React, { useContext } from "react";
import styled from "styled-components";
import Switch from "react-switch";
import { DataContext } from "../../providers/data";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;

const StyledSpan = styled.span`
color: white;
margin-right: 10px;
font-size: 14px;
`;

const StyledSwitch = styled(Switch)`
    margin-right: 10px;
`;

const DemoSwitch = () => {

    const { demo, setDemo } = useContext(DataContext);

    return (
        <StyledDiv>
           <StyledSpan> Demo Data:</StyledSpan>
           <StyledSwitch onChange={setDemo} checked={demo} />
        </StyledDiv>
    )

};

export default DemoSwitch;
