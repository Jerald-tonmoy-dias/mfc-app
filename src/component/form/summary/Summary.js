import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import Pdf from "react-to-pdf";
import axios from "axios";

import {
  Title,
  MainWrapper,
  NextPrevWrapper,
  CheckBoxElement,
} from "../Form.styled";

import { StoreContext } from "../../../context/Store";

import Navbar from "../../navbar/Navbar";

export default function Summary() {
  // gettting context value
  /******************************************
   *
   * GETTING CONTEXT VALUE
   *
   ******************************************/
  const theme = useContext(ThemeContext);
  let { vehicleDetails, vehicleData, yourPolicy, setCountSteps, yourDetails ,checkVehicle, setcheckVehicle} =
    useContext(StoreContext);

  /******************************************
   *
   *
   * VARIABLES AND STATES
   *
   *
   ******************************************/
  let { VehicleRegistration } = vehicleDetails;

  const [dataSuccess, setdataSuccess] = useState(false);
  const [showquoteButton, setshowquoteButton] = useState(false);
  // create ref
  const ref = React.createRef();

  /******************************************
   *
   *
   * FUNCTIONS
   *
   *
   ******************************************/
  const nextpageFunction = () => {
    setCountSteps(7);
  };

  const handleGetQuote = () => {


    const data = {
      vehicle: vehicleData,
      yourDetails: yourDetails,
      yourPolicy: yourPolicy,
    }

    return axios
      .post(data)
      .then((res) => {
        if (res.data === 'success') {
          setdataSuccess(true)
          setshowquoteButton(true);
        } else {
          setdataSuccess(false)
          setshowquoteButton(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
      <Navbar navItem={4} navpassed={false} />
      <Title color={theme.blackColor}>Summary of key details</Title>

      <MainWrapper ref={ref} liteBlackColor={theme.liteBlackColor}>
        <div className="add_product_section pdf_summary_wrapper">
          <p>
            Before we get your quotes, we've summarised the key details that you
            have told us, please check these are correct to ensure they meet
            your needs.
          </p>

          <hr />

          <div className="summary_wrapper">
            <div className="left-side">
              <div className="single_summary">
                <h3>Vehicle details and usage</h3>
                <p>
                  Vehicle:{" "}
                  <strong>
                    {`${VehicleRegistration.YearMonthFirstRegistered} ${VehicleRegistration.MakeModel} ${VehicleRegistration.Vrm} ${VehicleRegistration.EngineCapacity} ${VehicleRegistration.FuelType},`}
                    {} VOLKSWAGEN SHARAN SEL BLUEMOTION TECH TDI (170), 1968cc
                    Diesel, 5DR, Automatic (KM12AKK)
                  </strong>
                </p>
                <p>
                  Exported:{" "}
                  <strong>{`${
                    VehicleRegistration.Exported == true ? "Yes" : "No"
                  }`}</strong>
                </p>
                <p>
                  Imported: <strong>{vehicleData.imported}</strong>
                </p>
                <p>
                  Usage: <strong>{vehicleData.usedCarFor}</strong>
                </p>
              </div>
              <div className="single_summary">
                <h3>Cover</h3>
                <p>
                  Cover type: <strong>{yourPolicy.typeOfCover}</strong>
                </p>
                {yourDetails.maxVoluntaryExcess && (
                  <p>
                    Voluntary excess:{" "}
                    <strong>{yourDetails.maxVoluntaryExcess}</strong>
                  </p>
                )}

                <p>
                  Main driver:{" "}
                  <strong>
                    {yourPolicy.mainDrive == "me"
                      ? `${yourDetails.firstName} ${yourDetails.lastName} `
                      : yourPolicy.mainDrive}
                  </strong>
                </p>
                <p>
                  Payment preference:{" "}
                  <strong>{yourPolicy.payForCarInsurance}</strong>
                </p>
              </div>
            </div>
            <div className="right-side">
              <div className="single_summary">
                <h3>Policyholder</h3>
                <p>
                  Personal accident cover:{" "}
                  <strong>{yourPolicy.personalAccidentCover}</strong>
                </p>
                <p>
                  Courtesy car: <strong>{yourPolicy.courtesyCar}</strong>
                </p>
                <p>
                  Breakdown cover: <strong>{yourPolicy.breakdownCover}</strong>
                </p>
                <p>
                  Motor legal protection:{" "}
                  <strong>{yourPolicy.motorLegalProtection}</strong>
                </p>
              </div>
            </div>
            <div className="right-side">
              <div className="single_summary">
                <h3>Policyholder</h3>
                <p>
                  Licence type: <strong>{yourDetails.typeOfLicence}</strong>
                </p>
                <p>
                  Claims: <strong>{yourDetails.anyClaims}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>

{dataSuccess == true ? [
   (
    <MainWrapper>
    <div className="add_product_section pdf_summary_wrapper thank-you">
      <h1> Thank you</h1>
      <p>Your car information has been submitted!</p>
    </div>
     </MainWrapper>
   )
] : null}
 

      <NextPrevWrapper
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
      >
        {showquoteButton === false ? 
         <button className="btn" onClick={handleGetQuote}>
         get quote
            </button> : null  
      }
     
        {/* <button type="button" onClick={nextpageFunction} className="btn next ">
          get quote
        </button> */}
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn next" onClick={toPdf}>
              {" "}
              download pdf
            </button>
          )}
        </Pdf>
      </NextPrevWrapper>
    </div>
  );
}
