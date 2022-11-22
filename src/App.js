import React, { useContext } from 'react'
import styled from 'styled-components';
import Vehicle from '../src/component/form/vehicle/Vehicle';
import Details from '../src/component/form/details/Details';
import Honesty from '../src/component/static/Honesty';
import Navbar from '../src/component/navbar/Navbar';

function App() {
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
      {/* <Details /> */}
      <Honesty />
    </Wrapper>
  );
}

export default App;
