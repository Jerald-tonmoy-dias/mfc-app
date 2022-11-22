import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';


export default function Honesty() {
    // gettting context value
    const theme = useContext(ThemeContext);

    // styles
    const Container = styled.div`
        margin-top: 50px;
        padding: 10px 20px;
        border-radius: 10px;
        background: ${theme.whiteColor};
        color: ${theme.blackColor};

        h4 {
            margin-bottom: 0px;
        }
    `;

    return (
        <Container>
            <h4>Honesty’s the best policy</h4>
            <p>It’s important you answer all questions honestly. Take care that the information you disclose throughout the quote is accurate and complete to the best of your knowledge. If you don’t do this, your insurance provider could increase your premium, cancel your policy, treat it as if it never existed, refuse a claim or not pay the claim in full.</p>
        </Container>
    )
}
