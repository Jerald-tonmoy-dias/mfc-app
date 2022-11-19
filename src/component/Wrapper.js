import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import Navbar from './navbar/Navbar';

export default function Wrapper() {

    const themeContext = useContext(ThemeContext)

    console.log('Current theme: ', themeContext)

    const Wrapper = styled.div`
    width: 95%;
    max-width: 1190px;
    margin: 0 auto 20px;
    padding: 0 5px;
    `;

    return (
        <Wrapper>
            <Navbar />
        </Wrapper>
    )
}
