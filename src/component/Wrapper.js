import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import Vehicle from './form/vehicle/Vehicle';
import Navbar from './navbar/Navbar';

export default function Wrapper() {
    const Wrapper = styled.div`
    width: 95%;
    max-width: 1190px;
    margin: 0 auto 20px;
    padding: 0 5px;
    `;

    return (
        <Wrapper>
            <Navbar />
            <Vehicle />
        </Wrapper>
    )
}
