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

export default function Vehicle() {
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
    // nextpageFunction function
  const nextpageFunction = () => {
    // after validation is done
    setCountSteps(2);
  };

  return (
    <div>
      <Navbar navItem={1} navpassed={false}/>
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

      <ContentWrapper
        liteBlackColor={theme.liteBlackColor}
        borderColor={theme.liteBlackColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
        secondaryColor={theme.secondaryColor}
      >
        <div className="content-left">
          What type of alarm and/or immobiliser does the car have?
        </div>
        <div className="content-right">
          <select className="selectClass">
            <option value="" disabled="">
              Please select...
            </option>
            <option value="99991">
              Factory Fitted Thatcham Approved Alarm/Immobiliser
            </option>
            <option value="99992">
              Factory Fitted Thatcham Approved Alarm
            </option>
            <option value="99993">
              Factory Fitted Non-Thatcham Alarm/Immobiliser
            </option>
            <option value="99994">Factory Fitted Non-Thatcham Alarm</option>
            <option value="#F">Factory Fitted</option>
            <option value="#N">None</option>
          </select>
        </div>
      </ContentWrapper>

      <ContentWrapper
        borderColor={theme.liteBlackColor}
        liteBlackColor={theme.liteBlackColor}
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
        secondaryColor={theme.secondaryColor}
      >
        <div className="content-left">
          Is the car fitted with a tracking device?
        </div>
        <div className="content-right">
          <RadioButtons
            primaryColor={theme.primaryColor}
            blackColor={theme.blackColor}
            whiteColor={theme.whiteColor}
          >
            <input type="radio" id="radio1" name="radios" value="yes" />
            <label for="radio1">yes</label>

            <input type="radio" id="radio2" name="radios" value="no" />
            <label for="radio2">no</label>
          </RadioButtons>
        </div>
      </ContentWrapper>

      <ContentWrapper
        borderColor={theme.liteBlackColor}
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
        liteBlackColor={theme.liteBlackColor}
        secondaryColor={theme.secondaryColor}
      >
        <div className="content-left">Is the car left or right hand drive?</div>
        <div className="content-right">
          <RadioButtons
            primaryColor={theme.primaryColor}
            blackColor={theme.blackColor}
            whiteColor={theme.whiteColor}
          >
            <input type="radio" id="radio3" name="radios" value="yes" />
            <label for="radio3">left hand</label>

            <input type="radio" id="radio4" name="radios" value="no" />
            <label for="radio4">right hand</label>
          </RadioButtons>
        </div>
      </ContentWrapper>

      <ContentWrapper
        borderColor={theme.liteBlackColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
        secondaryColor={theme.secondaryColor}
        liteBlackColor={theme.liteBlackColor}
      >
        <div className="content-left">How many seats are there in the car?</div>
        <div className="content-right">
          <select className="selectClass">
            <option value="" disabled="">
              Please select...
            </option>
            <option value="99991">1</option>
            <option value="99992">2</option>
            <option value="99993">3</option>
            <option value="99994">4</option>
            <option value="#F">5</option>
            <option value="#N">6</option>
            <option value="#f">7</option>
          </select>
        </div>
      </ContentWrapper>

      <ContentWrapper
        borderColor={theme.liteBlackColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
        secondaryColor={theme.secondaryColor}
        liteBlackColor={theme.liteBlackColor}
      >
        <div className="content-left">
          Do you know the current value of the car?
        </div>
        <div className="content-right">
          <input type="text" className="text_input" value="$8810" />
        </div>
        <div>
          <p>
            Where possible, we’ve estimated your car’s current market value
            using an independent provider.
          </p>
          <p>
            If a value isn’t shown or you’d like to amend it, simply enter the
            current market value in the box.
          </p>
        </div>
      </ContentWrapper>

      {/* second step */}
      <ContentWrapper
        borderColor={theme.liteBlackColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
        secondaryColor={theme.secondaryColor}
        liteBlackColor={theme.liteBlackColor}
      >
        <div className="content-left">
          When did you buy or start to lease this car?
        </div>
        <div className="content-right">
          <input type="date" className="text_input" /> <br />
          <div className="check_box_wrapper">
            <input id="check11" type="checkbox" className="text_input" />
            <label htmlFor="check11">i don't have this car yet</label>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper
        borderColor={theme.liteBlackColor}
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
        secondaryColor={theme.secondaryColor}
      >
        <div className="content-left">What do you use the car for?</div>
        <div className="content-right">
          <RadioButtons
            primaryColor={theme.primaryColor}
            blackColor={theme.blackColor}
            whiteColor={theme.whiteColor}
          >
            <input
              type="radio"
              id="car_used_1"
              name="radios"
              value="Social, Domestic and Pleasure (SDP) only"
            />
            <label for="car_used_1">
              Social, Domestic and Pleasure (SDP) only
            </label>

            <input
              type="radio"
              id="car_user_2"
              name="radios"
              value="Social, Domestic Pleasure & Commuting (SDPC)"
            />
            <label for="car_user_2">
              Social, Domestic Pleasure & Commuting (SDPC)
            </label>

            <input
              type="radio"
              id="car_user_3"
              name="radios"
              value="SDPC & Business Use"
            />
            <label for="car_user_3">SDPC & Business Use</label>
          </RadioButtons>
        </div>
      </ContentWrapper>

      <ContentWrapper
        borderColor={theme.liteBlackColor}
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
        secondaryColor={theme.secondaryColor}
        liteBlackColor={theme.liteBlackColor}
      >
        <div className="content-left">
          What is the total annual personal mileage for this car?
        </div>
        <div className="content-right">
          <input type="text" className="text_input" name="radios" />
          <label>miles per year</label>
        </div>
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
