import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import { StoreContext } from '../../../context/Store';
import Button from '../../button/Button';

export default function NotFoundVehicle() {
    let {
        setnotFound,
    } = useContext(StoreContext);

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
            <Button primaryColor={theme.primaryColor}  type='submit' onClick={()=>setnotFound(false)}>
                Find again
            </Button>
        </Container>
    )
}
