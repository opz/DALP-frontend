import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import Switch from "react-switch";
import { DataContext } from "../../providers/data";

const StyledFragment = styled(Fragment)`
    display: flex;
    align-items: center;
`;

const StyledSpan = styled.span`
color: white;
margin-right: 10px;
font-size: 14px;
`;

/*
color: white;
font-size: 10px;
margin-left: 5px;
text-align: center;
margin-top: 6px;
*/

const StyledSwitch = styled(Switch)`
    margin-right: 10px;
`;

const DemoSwitch = ({ }) => {

    const { demo, setDemo } = useContext(DataContext);

    return (
        <StyledFragment>
           <StyledSpan> Demo Data:</StyledSpan>
           <StyledSwitch onChange={setDemo} checked={demo} />
        </StyledFragment>
    )

};

export default DemoSwitch;