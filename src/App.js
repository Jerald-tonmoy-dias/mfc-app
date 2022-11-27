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
import { Wrapper } from './styles/Global.styled';
import AdditionalDetails from './component/form/details/AdditionalDetails';
import AdditionalProductAndFea from './component/form/policy/AdditionalProductAndFea';
import AccountAndContactDetails from './component/form/policy/AccountAndContactDetails';

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
        return <AdditionalDetails />;
      case 4:
        return <Policy />;
      case 5:
        return <AdditionalProductAndFea/>;
      case 6:
        return <AccountAndContactDetails/>;
      case 7:
        return <Summary />;
      case 8:
        return <Quotes />;
      default:
        return <Vehicle />;
    }
  };

  return (
    <Wrapper>
      {checkVehicle == false ? <CheckVehicle /> : [
        displayComponent()
      ]}
      <Honesty />
    </Wrapper>
  );
}

export default App;
