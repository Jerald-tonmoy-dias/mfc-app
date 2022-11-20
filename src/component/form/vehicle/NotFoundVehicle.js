import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

export default function NotFoundVehicle() {
    const theme = useContext(ThemeContext);

    const Container = styled.div`
        background: ${theme.whiteColor};
        border: 1px solid ${theme.secondaryColor};
        padding: 20px;
        border-radius: 5px;
        margin: 30px 0;
    h4 {
        margin: 0 0 10px 0;
    }
        p {
            margin: 0;
            span {
                color: ${theme.primaryColor};
                font-weight: 700;
            }
        }

    `;

    return (
        <Container>
            <h4>Oops! We have a problem</h4>
            <p>
              <span>Vehicle Lookup:</span> There were no vehicles found for this registration. Please check that you have entered it correctly
            </p>
        </Container>
    )
}
