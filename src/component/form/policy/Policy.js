import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import Button from "../../button/Button";
import axios from "axios";

import {
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

export default function Policy() {
  // gettting context value
  /******************************************
   * 
   * GETTING CONTEXT VALUE
   * 
   ******************************************/
  const theme = useContext(ThemeContext);
  let {
    yourDetails, setyourDetails,
    vehicleDetails, setCountSteps,
    yourPolicy, setyourPolicy
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
      yourPolicy.mainDrive == "" ||
      yourPolicy.AreYouregLegalOwner == "" ||
      yourPolicy.typeOfCover == "" ||
      yourPolicy.payForCarInsurance == "" ||
      yourPolicy.NCDHaveYear == ""
    ) {
      // fill up the info to go forward
      setvaludationError(true);
    } else {
      // go to next step
      setvaludationError(false);
      setCountSteps(5);
    }
  };
  // handle onchange function
  const handleOnchangeYourData = (e) => {
    setyourPolicy({ ...yourPolicy, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar navItem={3} navpassed={false} />
      <Title color={theme.blackColor}>Policy Details</Title>

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

              {yourPolicy.mainDrive == "" ? (
                <h5>
                  {" "}
                  Who is the main driver of this vehicle?:
                  <span className="text-light">{validationText}</span>
                </h5>
              ) : null}
              {yourPolicy.AreYouregLegalOwner == "" ? (
                <h5>
                  {" "}
                  Are you (or will you be) the registered keeper and legal owner?:
                  <span className="text-light">{validationText}</span>
                </h5>
              ) : null}
              {yourPolicy.typeOfCover == "" ? (
                <h5>
                  {" "}
                  What type of cover are you looking for?:
                  <span className="text-light">{validationText}</span>
                </h5>
              ) : null}
              {yourPolicy.payForCarInsurance == "" ? (
                <h5>
                  {" "}
                  How do you want to pay for your car insurance?:
                  <span className="text-light">{validationText}</span>
                </h5>
              ) : null}
              {yourPolicy.NCDHaveYear == "" ? (
                <h5>
                  {" "}
                  How many years of no claims discount (NCD) do you have?:
                  <span className="text-light">{validationText}</span>
                </h5>
              ) : null}
            </ValidationAlert>
          </MainWrapper>,
        ]
        : null}

      {/* Who is the main driver of this vehicle? */}
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
          <div className="content-left">
            Who is the main driver of this vehicle?
          </div>
          <div className="content-right">
            <select name="mainDrive" className="selectClass" onChange={handleOnchangeYourData}>
              <option value="" >
                Please select...
              </option>
              <option value="me">
                {`${yourDetails.yourTitle} ${yourDetails.firstName} ${yourDetails.lastName}`}
              </option>

            </select>
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* Are you (or will you be) the registered keeper and legal owner? */}
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
          <div className="content-left">
            Are you (or will you be) the registered keeper and legal owner?
          </div>
          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="radioRegKeeper1"
                name="AreYouregLegalOwner"
                value="Yes"
              />
              <label htmlFor="radioRegKeeper1">yes</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="radioRegKeeper2"
                name="AreYouregLegalOwner"
                value="No"
              />
              <label htmlFor="radioRegKeeper2">no</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
      </MainWrapper>

      {
        yourPolicy.AreYouregLegalOwner == 'No' ? [
          (
            <>
              {/* Who is the registered keeper? */}
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
                  <div className="content-left">
                    Who is the registered keeper?
                  </div>
                  <div className="content-right">
                    <select name="whoRegKeeper" className="selectClass" onChange={handleOnchangeYourData}>
                      <option value="" >
                        Please select...
                      </option>
                      <option value="me">
                        {`${yourDetails.yourTitle} ${yourDetails.firstName} ${yourDetails.lastName}`}
                      </option>
                      <option value="Company">
                        Company
                      </option>
                      <option value="Other">
                        Other
                      </option>
                      <option value="Leased Private">
                        Leased Private
                      </option>
                      <option value="Leased Company">
                        Leased Company
                      </option>
                      <option value="Society or Club">
                        Society or Club
                      </option>

                    </select>
                  </div>
                </ContentWrapper>
              </MainWrapper>

              {/* Who is the legal owner? */}
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
                  <div className="content-left">
                    Who is the legal owner?
                  </div>
                  <div className="content-right">
                    <select name="whoLegalOwner" className="selectClass" onChange={handleOnchangeYourData}>
                      <option value="" >
                        Please select...
                      </option>
                      <option value="me">
                        {`${yourDetails.yourTitle} ${yourDetails.firstName} ${yourDetails.lastName}`}
                      </option>
                      <option value="Company">
                        Company
                      </option>
                      <option value="Other">
                        Other
                      </option>
                      <option value="Leased Private">
                        Leased Private
                      </option>
                      <option value="Leased Company">
                        Leased Company
                      </option>
                      <option value="Society or Club">
                        Society or Club
                      </option>

                    </select>
                  </div>
                </ContentWrapper>
              </MainWrapper>
            </>
          )
        ] : null
      }

      {/* What type of cover are you looking for? */}
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
          <div className="content-left">
            What type of cover are you looking for?
          </div>
          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="Comprehensive1"
                name="typeOfCover"
                value="Comprehensive"
              />
              <label className="lg-label" htmlFor="Comprehensive1">
                <h4>Comprehensive</h4>
                This covers claims made against you by others. This also covers your car if it is damaged, stolen, or written off.
              </label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="fire&theft2"
                name="typeOfCover"
                value="Third Party Fire & Theft"
              />
              <label className="lg-label" htmlFor="fire&theft2">
                <h4>Third Party Fire & Theft</h4>
                This covers claims made against you by others. This also covers your car, but only if it is stolen or damaged due to a fire.</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="thirdPartyOnly2"
                name="typeOfCover"
                value="Third Party Only"
              />
              <label className="lg-label" htmlFor="thirdPartyOnly2">
                <h4>  Third Party Only</h4>

                This covers claims made against you by others. There is no cover for you or your car.</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* How do you want to pay for your car insurance? */}
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
          <div className="content-left">
            How do you want to pay for your car insurance?
          </div>
          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="One_annual_payment"
                name="payForCarInsurance"
                value="One annual payment"
              />
              <label htmlFor="One_annual_payment">
                One annual payment
              </label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="Monthly_instalments"
                name="payForCarInsurance"
                value="Monthly instalments"
              />
              <label htmlFor="Monthly_instalments">
                Monthly instalments</label>

            </RadioButtons>
          </div>
          <div>
            <p>
              Paying in monthly instalments often means you’ll enter into a credit agreement where you could be charged interest, so might be more expensive. One annual payment is typically cheaper.
            </p>

            <p> Selecting monthly instalments may reduce the number of quotes you will see.</p>
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* How many years of no claims discount (NCD) do you have? */}
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
          <div className="content-left">
            How many years of no claims discount (NCD) do you have?
          </div>
          <div className="content-right">

            <select name="NCDHaveYear" className="selectClass" onChange={handleOnchangeYourData}>><option value="" disabled="">Please select...</option><option value="0">No NCD</option><option value="1">1 Year</option><option value="2">2 Years</option><option value="3">3 Years</option><option value="4">4 Years</option><option value="5">5 Years</option><option value="6">6 Years</option><option value="7">7 Years</option><option value="8">8 Years</option><option value="9">9 Years</option><option value="10">10 Years</option><option value="11">11 Years</option><option value="12">12 Years</option><option value="13">13 Years</option><option value="14">14 Years</option><option value="15">15 Years</option><option value="16">16 Years</option><option value="17">17 Years</option><option value="18">18 Years</option><option value="19">19 Years</option><option value="20">20 Years +</option></select>
          </div>
          <p>
            You build NCD for each year you hold a policy in your name, without making a claim. It can only be used on one vehicle at a time and not all providers will accept NCD earned on a van or bike.
          </p>
        </ContentWrapper>
      </MainWrapper>

      {/* What’s the maximum voluntary excess you’d like on this policy? */}
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
          <div className="content-left">
            How many years of no claims discount (NCD) do you have?
          </div>
          <div className="content-right">
            <select name="maxVoluntaryExcess" className="selectClass" onChange={handleOnchangeYourData}>
              <option value="" disabled="">Please select...</option><option value="0">None</option><option value="50">£50</option><option value="100">£100</option><option value="150">£150</option><option value="200">£200</option><option value="250">£250</option><option value="300">£300</option><option value="350">£350</option><option value="400">£400</option><option value="450">£450</option><option value="500">£500</option><option value="600">£600</option><option value="700">£700</option><option value="800">£800</option><option value="900">£900</option><option value="1000">£1000</option></select>
          </div>
          <p>
            You may find that some insurance providers quote with a lower voluntary excess than you've chosen. This will not affect the price of your policy but may save you money in the event of a claim.
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
