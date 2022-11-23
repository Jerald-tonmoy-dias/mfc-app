import React, { useContext } from 'react'
import styled from 'styled-components';
import CheckVehicle from './component/form/vehicle/CheckVehicle';
import Honesty from '../src/component/static/Honesty';
import Navbar from '../src/component/navbar/Navbar';
import Vehicle from './component/form/vehicle/Vehicle';
import { StoreContext } from './context/Store';
import Details from './component/form/details/Details';
import Policy from './component/form/policy/Policy';
import Summary from './component/form/summary/Summary';
import Quotes from './component/form/quotes/Quotes';

function App() {
  // get context value
  let {
    checkVehicle,
    setcheckVehicle,
    countSteps,
    setCountSteps
  } = useContext(StoreContext);


  // display content
  const displayComponent = () => {
    switch (countSteps) {
      case 1:
        return <Vehicle />;
      case 2:
        return <Details />;
      case 3:
        return <Policy />;
      case 4:
        return <Summary />;
      case 5:
        return <Quotes />;
      default:
        return <Vehicle />;
    }
  };

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
        //  <Vehicle />
        displayComponent()
      ]}
      <Honesty />
    </Wrapper>
  );
}

export default App;
