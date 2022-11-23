import React, { useContext } from 'react'
import styled from 'styled-components';
import CheckVehicle from './component/form/vehicle/CheckVehicle';
import Honesty from '../src/component/static/Honesty';
import Navbar from '../src/component/navbar/Navbar';
import Vehicle from './component/form/vehicle/Vehicle';
import { StoreContext } from './context/Store';

function App() {
  // get context value
  let {
    checkVehicle,
    setcheckVehicle
  } = useContext(StoreContext);

  // styles
  const Wrapper = styled.div`
    width: 95%;
    max-width: 1190px;
    margin: 0 auto 20px;
    padding: 0 5px;
    `;
  return (
    <Wrapper>
      {/* <Navbar /> */}
      {checkVehicle == false ?  <CheckVehicle /> : [
         <Vehicle />
      ]}
      <Honesty />
    </Wrapper>
  );
}

export default App;
