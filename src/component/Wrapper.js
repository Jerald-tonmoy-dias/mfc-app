import React, { useContext } from 'react'
import styled from 'styled-components';
import Vehicle from './form/vehicle/Vehicle';
import Details from './form/details/Details';
import Honesty from './static/Honesty';
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
            <Details/>
            <Honesty/>
        </Wrapper>
    )
}
