import React,{useContext} from 'react'
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

export default function NotFoundVehicle() {
    const theme = useContext(ThemeContext);

    const Container = styled.div`
        background: ${theme.whiteColor};
        border: 1px solid ${theme.primaryColor};

    `; 

  return (
    <Container>
        not found
    </Container>
  )
}
