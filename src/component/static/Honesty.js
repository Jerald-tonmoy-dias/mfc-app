import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';
import { Title } from '../form/Form.styled';
import { Container } from './HonestyStyles.styled';


export default function Honesty() {
    // gettting context value
    const theme = useContext(ThemeContext);
    return (
        <>
        <Title>Vehicle usage</Title>
        <Container whiteColor={theme.whiteColor} blackColor={theme.blackColor}>
            <h4>Honesty’s the best policy</h4>
            <p>It’s important you answer all questions honestly. Take care that the information you disclose throughout the quote is accurate and complete to the best of your knowledge. If you don’t do this, your insurance provider could increase your premium, cancel your policy, treat it as if it never existed, refuse a claim or not pay the claim in full.</p>
        </Container>
       </>
    )
}
