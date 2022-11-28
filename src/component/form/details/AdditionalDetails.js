import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";

import {
  Title,
  ContentWrapper,
  NextPrevWrapper,
  MainWrapper,
} from "../Form.styled";
import { StoreContext } from "../../../context/Store";
import Navbar from "../../navbar/Navbar";

export default function AdditionalDetails() {
  /******************************************
   * 
   * GETTING CONTEXT VALUE
   * 
   ******************************************/
  const theme = useContext(ThemeContext);
  let {
    vehicleDetails,
    yourDetails, setyourDetails,
    setCountSteps
  } = useContext(StoreContext);

  /******************************************
 * 
 * 
 * VARIABLES AND STATES
 * 
 * 
 ******************************************/
  let { VehicleRegistration } = vehicleDetails;


  /******************************************
   * 
   * 
   * FUNCTIONS
   * 
   * 
   ******************************************/
  const nextpageFunction = () => {
    setCountSteps(4);
  };


  return (
    <div>
      <Navbar navItem={2} navpassed={false} />
      <Title color={theme.blackColor}>Personal details</Title>
      <MainWrapper>
        <ContentWrapper
          borderColor={theme.liteBlackColor}
          liteBlackColor={theme.liteBlackColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          primaryColor={theme.primaryColor}
          secondaryColor={theme.secondaryColor}
        >
          <div className="content-left">
            <h2>Personal details</h2>
          </div>
          <div className="content-right">
            <div className="has_bg">
              <p>
                <span className="lg-text">
                  {yourDetails.firstName}{" "} {yourDetails.lastName}
                </span>
                <span className="lg-text">
                {" "} {yourDetails.employment_status} {" "}{yourDetails.employment_profession}
                </span>

                <br />
                <span className="small-text">
                  License {yourDetails.typeOfLicence}{" "}
                </span>
                <br />
                <span className="small-text">
                  Held for  {yourDetails.howLongLicenceHeld}{" "} year{" "}
                </span>
                <br />
                <span className="small-text">
                  {yourDetails.anyClaims !== '' ? 'Claims against ' + yourDetails.anyClaims : 'No claims'}
                </span>
              </p>

            </div>
          </div>
          <div className="tooltip"></div>
        </ContentWrapper>
      </MainWrapper>

      {/* next previous text */}
      <NextPrevWrapper
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
      >
        <button type="button" onClick={nextpageFunction} className="btn next">
          next
        </button>
      </NextPrevWrapper>
    </div>
  );
}
