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
import { BsPencil, BsQuestionLg, BsSearch } from "react-icons/bs";
import Navbar from "../../navbar/Navbar";
import { toggleClassForHover } from "../../../helper/helper";

export default function Details() {
  /******************************************
   * 
   * GETTING CONTEXT VALUE
   * 
   ******************************************/
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
    yourDetails, setyourDetails,
    isLivedSinceBirth, setisLivedSinceBirth,
    isLicenceMore, setisLicenceMore
  } = useContext(StoreContext);

  /******************************************
 * 
 * 
 * VARIABLES AND STATES
 * 
 * 
 ******************************************/
  let { VehicleRegistration } = vehicleDetails;
  const [openToolTip, setopenToolTip] = useState(false);


  /******************************************
   * 
   * 
   * FUNCTIONS
   * 
   * 
   ******************************************/
  const nextpageFunction = () => {
    setCountSteps(3);
  };

  // handle onchange function
  const handleOnchangeYourData = (e) => {
    setyourDetails({ ...yourDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar navItem={2} navpassed={false} />
      <Title color={theme.blackColor}>Personal details</Title>

      {/* What is your title? */}
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
            What is your title?
          </div>
          <div className="content-right">
            <select name="yourTitle" className="selectClass" onChange={handleOnchangeYourData}>
              <option value="" disabled>
                Please select...
              </option>
              <option value="Mr">
                Mr
              </option>
              <option value="Mrs">
                Mrs
              </option>
              <option value="Ms">
                Ms
              </option>
              <option value="Miss">
                Miss
              </option>
            </select>
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* First name */}
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
            First name
          </div>
          <div className="content-right">
            <input
              type="text"
              className="text_input"
              name="firstName"
              onChange={handleOnchangeYourData}
            />
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* Last name */}
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
            Last name
          </div>
          <div className="content-right">
            <input
              type="text"
              className="text_input"
              name="lastName"
              onChange={handleOnchangeYourData}
            />
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* What is your date of birth? */}
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
            What is your date of birth?
          </div>
          <div className="content-right">
            <input
              className="text_input"
              type="date"
              name="yourDateOfBirth"
              onChange={handleOnchangeYourData}
            />
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* Your relationship status? */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        id="yd_1"
      >
        <ContentWrapper
          liteBlackColor={theme.liteBlackColor}
          borderColor={theme.liteBlackColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          secondaryColor={theme.secondaryColor}
        >
          <button
            type="button"
            onClick={(e) => toggleClassForHover("yd_1")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            Your relationship status?
          </div>
          <div className="content-right">
            <select name="relationshipStatus" className="selectClass" onChange={handleOnchangeYourData}>
              <option value="" disabled>
                Please select...
              </option>
              <option value="Married">
                Married
              </option>
              <option value="Civil Partnered">
                Civil Partnered
              </option>
              <option value="Single">
                Single
              </option>
              <option value="Common Law Partnered/Cohabitin">
                Common Law Partnered/Cohabitin
              </option>
              <option value="Divorced">
                Divorced
              </option>
              <option value="Separated">
                Separated
              </option>
              <option value="Widowed/Surviving Civil Partner">
                Widowed/Surviving Civil Partner
              </option>
            </select>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <p>Insurers need this information in order to provide a quote.</p>
        </ToolTipWrapper>
      </MainWrapper>

      {/* Do you own your home? */}
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
            Do you own your home?
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
                id="radioYd1"
                name="ownYourHome"
                value="Yes"
              />
              <label htmlFor="radioYd1">yes</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="radioYd2"
                name="ownYourHome"
                value="No"
              />
              <label htmlFor="radioYd2">no</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* Do any children under the age of 16 live with you? */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        id="yd_2"
      >
        <ContentWrapper
          liteBlackColor={theme.liteBlackColor}
          borderColor={theme.liteBlackColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          secondaryColor={theme.secondaryColor}
        >
          <button
            type="button"
            onClick={(e) => toggleClassForHover("yd_2")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            Do any children under the age of 16 live with you?
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
                id="radioYd3"
                name="childrenUnderAgeLiveWith"
                value="Yes"
              />
              <label htmlFor="radioYd3">yes</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="radioYd4"
                name="childrenUnderAgeLiveWith"
                value="No"
              />
              <label htmlFor="radioYd4">no</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <p>Please select 'Yes' if any children under the age of 16 live at your address.</p>
        </ToolTipWrapper>
      </MainWrapper>

      {/* Address */}
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
            Address Line
          </div>
          <div className="content-right">
            <textarea
              onChange={handleOnchangeYourData}
              className="text_input"
              type="text"
              name="address"
            />

          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* Town / City */}
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
            Town / City
          </div>
          <div className="content-right">
            <input
              onChange={handleOnchangeYourData}
              className="text_input"
              type="text"
              name="town_city"
            />

          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* What is the postcode? */}
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
            What is the postcode?
          </div>
          <div className="content-right">
            <input
              onChange={handleOnchangeYourData}
              className="text_input"
              type="text"
              name="postcode"
            />

          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* What is your employment status? */}
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
            What is your employment status?
          </div>
          <div className="content-right">
            <select name="employment_status" className="selectClass" onChange={handleOnchangeYourData}>
              <option value="" disabled>
                Please select...
              </option>
              <option value="Employed">
                Employed
              </option>
              <option value="Unemployed">
                Unemployed
              </option>
              <option value="Self-Employed">
                Self-Employed
              </option>
              <option value="House Person">
                House Person
              </option>
              <option value="Full/Part Time Education">
                Full/Part Time Education
              </option>
              <option value="Retired">
                Retired
              </option>
              <option value="Not Employed Due To Disability/Illness">
                Not Employed Due To Disability/Illness
              </option>
            </select>
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* What do you do for a living? (eg: Teacher or Sales Assistant) */}
      {
        yourDetails.employment_status == "Employed" ||
          yourDetails.employment_status == "Self-Employed" ? [
          (
            <MainWrapper
              primaryColor={theme.primaryColor}
              whiteColor={theme.whiteColor}
              id="yd_3"
            >
              <ContentWrapper
                liteBlackColor={theme.liteBlackColor}
                borderColor={theme.liteBlackColor}
                whiteColor={theme.whiteColor}
                blackColor={theme.blackColor}
                secondaryColor={theme.secondaryColor}
              >
                <button
                  type="button"
                  onClick={(e) => toggleClassForHover("yd_3")}
                  className="mobile_trigger"
                >
                  <BsQuestionLg />
                </button>
                <div className="content-left">
                  What do you do for a living? (eg: Teacher or Sales Assistant)
                </div>
                <div className="content-right">
                  <input
                    onChange={handleOnchangeYourData}
                    className="text_input"
                    type="text"
                    name="employment_profession"
                    placeholder="Type first 3 letters..."
                  />
                </div>
              </ContentWrapper>
              <ToolTipWrapper
                open={openToolTip}
                primaryColor={theme.primaryColor}
                whiteColor={theme.whiteColor}
                blackColor={theme.blackColor}
              >
                <p>Knowing your occupation helps to calculate your quote more accurately and can make a difference to the price you pay. We use an extensive list of occupations for you to choose from.</p>
              </ToolTipWrapper>
            </MainWrapper>
          )
        ] : null
      }

      {/* How long have you continuously lived in the UK? */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        id="yd_4"
      >
        <ContentWrapper
          liteBlackColor={theme.liteBlackColor}
          borderColor={theme.liteBlackColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          secondaryColor={theme.secondaryColor}
        >
          <button
            type="button"
            onClick={(e) => toggleClassForHover("yd_4")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            How long have you continuously lived in the UK?
          </div>
          <div className="content-right">
            <input
              disabled={isLivedSinceBirth}
              className="text_input"
              type="date"
              name="livedInUk"
              onChange={handleOnchangeYourData}
            />
            <div className="car_checkbox_wrapper">
              <input
                id="have_car"
                type="checkbox"
                name="livedInUk"
                onChange={(e) => {
                  setyourDetails({ ...yourDetails, [e.target.name]: yourDetails.yourDateOfBirth });
                  setisLivedSinceBirth(!isLivedSinceBirth);
                }}
              />
              <label htmlFor="have_car">Since birth</label>
            </div>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <p>Insurers need to know how long you have continuously lived in the UK. This needs to be the date from which you've lived here as a permanent resident up to now and not include any gaps in residency of 6 months or more.</p>
        </ToolTipWrapper>
      </MainWrapper>

      {/* What type of driving licence do you have? */}
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
            What type of driving licence do you have?
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
                id="tdriveLicence1"
                name="typeOfLicence"
                value="UK Full"
              />
              <label htmlFor="tdriveLicence1">UK Full</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="tdriveLicence2"
                name="typeOfLicence"
                value="UK Provisional"
              />
              <label htmlFor="tdriveLicence2">UK Provisional</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="tdriveLicence3"
                name="typeOfLicence"
                value="UK Automatic"
              />
              <label htmlFor="tdriveLicence3">UK Automatic</label>

              <input
                onChange={(e) => {
                  setyourDetails({ ...yourDetails, [e.target.name]: e.target.value });
                  setisLicenceMore(true);
                }}
                type="radio"
                id="tdriveLicence4"
                name="typeOfLicence"
                value="More options"
              />
              <label htmlFor="tdriveLicence4">More options</label>
            </RadioButtons>
          </div>
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
