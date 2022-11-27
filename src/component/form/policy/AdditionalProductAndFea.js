import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import Button from "../../button/Button";
import axios from "axios";

import {
  RegisterCarWrapper,
  Title,
  ValidationAlert,
  MainWrapper,
  ContentWrapper,
  RadioButtons,
  NextPrevWrapper,
} from "../Form.styled";
import { BASE_URL } from "../../../BaseUrl";
import { StoreContext } from "../../../context/Store";
import { BsPencil } from "react-icons/bs";
import Navbar from "../../navbar/Navbar";

export default function AdditionalProductAndFea() {
  // gettting context value
  /******************************************
   *
   * GETTING CONTEXT VALUE
   *
   ******************************************/
  const theme = useContext(ThemeContext);
  let {
    vehicleDetails,
    setCountSteps,
    yourPolicy,
    setyourPolicy,
  } = useContext(StoreContext);

  /******************************************
   *
   *
   * VARIABLES AND STATES
   *
   *
   ******************************************/
  let { VehicleRegistration } = vehicleDetails;
  // valiation text
  const [validationText, setvalidationText] = useState(
    "Please answer this question in order to proceed."
  );
  const [valudationError, setvaludationError] = useState(false);


  /******************************************
   *
   *
   * FUNCTIONS
   *
   *
   ******************************************/

  const nextpageFunction = () => {
    if (
      yourPolicy.courtesyCar == "" ||
      yourPolicy.breakdownCover == "" ||
      yourPolicy.motorLegalProtection == "" ||
      yourPolicy.personalAccidentCover == ""

    ) {
      // fill up the info to go forward
      setvaludationError(true);
    } else {
      // go to next step
      setvaludationError(false);
      setCountSteps(6);
    }
  };

  // handle onchange function
  const handleOnchangeYourData = (e) => {
    setyourPolicy({ ...yourPolicy, [e.target.name]: e.target.value });
  };



  return (
    <div>
      <Navbar navItem={3} navpassed={false} />
      <Title color={theme.blackColor}>Additional products and features</Title>

      {/* show validation error*/}
      {valudationError === true
        ? [
          <MainWrapper>
            <ValidationAlert
              primaryColor={theme.primaryColor}
              whiteColor={theme.whiteColor}
              blackColor={theme.blackColor}
            >
              <h4>Oops! We have a problem</h4>

              {yourPolicy.personalAccidentCover == "" ? (
                <h5>
                  {" "}
                  Personal accident cover:
                  <span className="text-light">{validationText}</span>
                </h5>
              ) : null}

              {yourPolicy.courtesyCar == "" ? (
                <h5>
                  {" "}
                  Courtesy car:
                  <span className="text-light">{validationText}</span>
                </h5>
              ) : null}
              {yourPolicy.breakdownCover == "" ? (
                <h5>
                  {" "}
                  Breakdown cover:
                  <span className="text-light">{validationText}</span>
                </h5>
              ) : null}
              {yourPolicy.motorLegalProtection == "" ? (
                <h5>
                  {" "}
                  Motor legal protection:
                  <span className="text-light">{validationText}</span>
                </h5>
              ) : null}

            </ValidationAlert>
          </MainWrapper>,
        ]
        : null}

      {/*  */}
      <MainWrapper liteBlackColor={theme.liteBlackColor}>
        <div className="add_product_section">
          <p>
            Selecting additional products and features may reduce the number of
            quotes you see. You can also decide to tailor your quotes once your
            prices are displayed. Please make sure you don’t already have cover
            elsewhere (e.g. as part of a separate purchase or within a packaged
            bank account).
          </p>
        </div>
      </MainWrapper>

      {/* Personal accident cover */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
      >
        <ContentWrapper
          liteBlackColor={theme.liteBlackColor}
          borderColor={theme.liteBlackColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          secondaryColor={theme.secondaryColor}
        >
          <div className="content-left">Personal accident cover</div>
          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="personalAccidentCover1"
                name="personalAccidentCover"
                value="Yes"
              />
              <label htmlFor="personalAccidentCover1">yes</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="personalAccidentCover2"
                name="personalAccidentCover"
                value="No/I'll decide later"
              />
              <label htmlFor="personalAccidentCover2">
                No/I'll decide later
              </label>
            </RadioButtons>
          </div>
          <p>
            Provides cover in the event of a serious injury or accidental death.
          </p>

          <p>
            Motor accidents can happen when you least expect them and a serious
            injury or accidental death could put you and your family in
            financial difficulty. Personal accident cover can provide financial
            help in such a situation. Cover levels can vary by provider, but as
            a minimum the cover will provide £1,000 death benefit and £1,000
            disability/sight benefit.
          </p>
        </ContentWrapper>
      </MainWrapper>

      {/* Courtesy car */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
      >
        <ContentWrapper
          liteBlackColor={theme.liteBlackColor}
          borderColor={theme.liteBlackColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          secondaryColor={theme.secondaryColor}
        >
          <div className="content-left">Courtesy car</div>
          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="CourtesyCar1"
                name="courtesyCar"
                value="Yes"
              />
              <label htmlFor="CourtesyCar1">yes</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="CourtesyCar2"
                name="courtesyCar"
                value="No/I'll decide later"
              />
              <label htmlFor="CourtesyCar2">No/I'll decide later</label>
            </RadioButtons>
          </div>
          <p>
            Provides a courtesy car for a set amount of time while your car is
            being repaired, subject to availability.
          </p>

          <p>
            A courtesy car is provided if you’re unable to drive your car
            following an accident for a set period of time while your car is
            being repaired. Cover levels can vary dependent on the provider and
            there may be an additional cost to guarantee a replacement car in
            the event of an accident. A courtesy car will be provided subject to
            availability.
          </p>
        </ContentWrapper>
      </MainWrapper>

      {/* Breakdown cover */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
      >
        <ContentWrapper
          liteBlackColor={theme.liteBlackColor}
          borderColor={theme.liteBlackColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          secondaryColor={theme.secondaryColor}
        >
          <div className="content-left">Breakdown cover</div>
          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="BreakdownCover1"
                name="breakdownCover"
                value="Yes"
              />
              <label htmlFor="BreakdownCover1">yes</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="BreakdownCover2"
                name="breakdownCover"
                value="No/I'll decide later"
              />
              <label htmlFor="BreakdownCover2">No/I'll decide later</label>
            </RadioButtons>
          </div>
          <p>
            If you've broken down this cover will assist you at the roadside as
            a minimum. You can often upgrade your breakdown cover (e.g.
            recovery, home start, European travel) directly with the insurance
            provider. However, not all policies do this and you may want to
            consider a separate Breakdown policy.​ Please make sure you don't
            already have breakdown cover elsewhere (e.g. as part of a packaged
            bank account).​ Compare the Market also offer a standalone Breakdown
            Cover comparison service separate to your car insurance policy.
          </p>

          <p>
            If your car suffers a mechanical breakdown, this cover could help to
            get your car back on the road, recovery to a local garage or a
            destination of your choice. Breakdown cover can vary between
            providers. As a minimum, cover will provide roadside assistance.
          </p>
        </ContentWrapper>
      </MainWrapper>

      {/* Motor legal protection */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
      >
        <ContentWrapper
          liteBlackColor={theme.liteBlackColor}
          borderColor={theme.liteBlackColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          secondaryColor={theme.secondaryColor}
        >
          <div className="content-left">Motor legal protection</div>
          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="MotorLegalProtection1"
                name="motorLegalProtection"
                value="Yes"
              />
              <label htmlFor="MotorLegalProtection1">yes</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="MotorLegalProtection2"
                name="motorLegalProtection"
                value="No/I'll decide later"
              />
              <label htmlFor="MotorLegalProtection2">No/I'll decide later</label>
            </RadioButtons>
          </div>
          <p>
            Provides cover to claim compensation for uninsured losses in a non-fault accident. This may include personal injury, excess recovery and loss of earnings
          </p>

          <p>
            If you have an accident that wasn’t your fault, an insurer can act on your behalf to try and claim compensation for any uninsured losses that you may have suffered. These may include personal injury, excess recovery and loss of earnings. MLP should cover the cost of your legal expenses in pursuit of compensation if there is a reasonable prospect of success against the third party. MLP is available at an additional cost and cover can vary between providers. As a minimum £50,000 cover is provided for uninsured losses.
          </p>
        </ContentWrapper>
      </MainWrapper>

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
