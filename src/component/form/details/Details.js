import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import Button from "../../button/Button";
import axios from "axios";

import {
  RegisterCarWrapper,
  Title,
  SVGElement,
  ToolTipWrapper,
  MainWrapper,
  ContentWrapper,
  RadioButtons,
  NextPrevWrapper,
} from "../Form.styled";
import { BASE_URL } from "../../../BaseUrl";
import { StoreContext } from "../../../context/Store";
import { BsPencil } from "react-icons/bs";
import Navbar from "../../navbar/Navbar";

export default function Details() {
  // gettting context value
  const theme = useContext(ThemeContext);
  let {
    loading,
    setLoading,
    vehicleDetails,
    countSteps,
    setCountSteps,
    setvehicleDetails,
    setcheckVehicle,
    navList,
    setnavList,
  } = useContext(StoreContext);

  let { VehicleRegistration } = vehicleDetails;

  //   nextpageFunction function
  const nextpageFunction = () => {
    // after validation is done
    setCountSteps(3);
  };

  return (
    <div>
      <Navbar navItem={2} navpassed={false}/>
      <Title color={theme.blackColor}>vehicle details</Title>

      {/* first step */}
      <ContentWrapper
        borderColor={theme.liteBlackColor}
        liteBlackColor={theme.liteBlackColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
        primaryColor={theme.primaryColor}
        secondaryColor={theme.secondaryColor}
      >
        <div className="content-left">We’ve found your vehicle</div>
        <div className="content-right">
          <div className="has_bg">
            <p>
              <span className="lg-text">
                {VehicleRegistration.YearMonthFirstRegistered}{" "}
              </span>
              <span className="lg-text">
                {VehicleRegistration.MakeModel} {VehicleRegistration.Vrm}
              </span>

              <br />
              <span className="small-text">
                {VehicleRegistration.EngineCapacity}{" "}
              </span>
              <span className="small-text">
                {VehicleRegistration.FuelType} ,{" "}
              </span>
              <span className="small-text">
                {VehicleRegistration.TransmissionType}
              </span>
            </p>
            <button
              className="change_vehicle"
              type="button"
              onClick={() => setcheckVehicle(false)}
            >
              {" "}
              <BsPencil /> change vehicle
            </button>
          </div>
        </div>
        <div className="tooltip"></div>
      </ContentWrapper>

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
