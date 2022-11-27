import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";

import {
  RegisterCarWrapper,
  Title,
  SVGElement,
  ToolTipWrapper,
  MainWrapper,
  ContentWrapper,
  RadioButtons,
  NextPrevWrapper,
  CheckBoxElement,
} from "../Form.styled";
import { BASE_URL } from "../../../BaseUrl";
import { StoreContext } from "../../../context/Store";
import {
  AiFillCar,
  AiTwotoneLock,
  AiFillMail,
  AiOutlineFileDone,
} from "react-icons/ai";
import Navbar from "../../navbar/Navbar";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMessageRoundedDots } from "react-icons/bi";

export default function Summary() {
  // gettting context value
  /******************************************
   *
   * GETTING CONTEXT VALUE
   *
   ******************************************/
  const theme = useContext(ThemeContext);
  let { vehicleDetails, vehicleData, yourPolicy, setCountSteps, yourDetails } =
    useContext(StoreContext);

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
    setCountSteps(7);
  };

  return (
    <div>
      <Navbar navItem={4} navpassed={false} />
      <Title color={theme.blackColor}>Summary of key details</Title>

      <MainWrapper liteBlackColor={theme.liteBlackColor}>
        <div className="add_product_section">
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
                  Breakdown cover:{" "}
                  <strong>{yourPolicy.breakdownCover}</strong>
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
                  Licence type:{" "}
                  <strong>{yourDetails.typeOfLicence}</strong>
                </p>
                <p>
                Claims: <strong>{yourDetails.anyClaims}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>

      <NextPrevWrapper
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
      >
        <button type="button" onClick={nextpageFunction} className="btn next ">
          get quote
        </button>
      </NextPrevWrapper>
    </div>
  );
}
