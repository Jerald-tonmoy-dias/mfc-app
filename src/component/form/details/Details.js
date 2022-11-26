import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import Modal from 'react-modal';
import uuid from 'react-uuid';


import {
  RegisterCarWrapper,
  Title,
  SVGElement,
  ToolTipWrapper,
  MainWrapper,
  ContentWrapper,
  RadioButtons,
  NextPrevWrapper,
  ModalHeader,
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
    isLicenceMore, setisLicenceMore,
    allClaimedInsurance, setallClaimedInsurance
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
  // modal var and states
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      backgroundColor: theme.grayColor,
      width: '50%',
      overflow: 'scroll',
      height: 'calc(100 % - 130px)',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'block',
      zIndex: '99999',

    },
  };

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

  // modal
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>

      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {/* modal header */}
        <ModalHeader
          liteBlackColor={theme.liteBlackColor}
          borderColor={theme.liteBlackColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          primaryColor={theme.primaryColor}>
          <div className="header">
            <h2>Motor accident or claim</h2>
            {/* <button className="closeButton" onClick={closeModal}>close</button> */}
          </div>
          <p className="header_title">Only tell us about accidents or claims from the past five years.</p>
        </ModalHeader>

        {/* Description of incident */}
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
              Description of incident
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
                  id="accident1"
                  name="anyClaims"
                  value="accident"
                />
                <label htmlFor="accident1">accident</label>

                <input
                  onChange={handleOnchangeYourData}
                  type="radio"
                  id="radiotheft2"
                  name="anyClaims"
                  value="theft"
                />
                <label htmlFor="radiotheft2">theft</label>

                <input
                  onChange={handleOnchangeYourData}
                  type="radio"
                  id="radioother2"
                  name="anyClaims"
                  value="other"
                />
                <label htmlFor="radioother2">other</label>
              </RadioButtons>
            </div>
          </ContentWrapper>
        </MainWrapper>

        {/* On which date did the incident occur? (Only incidents that have occurred within the last five years.) */}
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
              On which date did the incident occur? (Only incidents that have occurred within the last five years.)
            </div>
            <div className="content-right">
              <input
                className="text_input"
                type="date"
                name="incidentOccur"
                onChange={handleOnchangeYourData}
              />
            </div>
          </ContentWrapper>
        </MainWrapper>

        {/* What type of damage was suffered? */}
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
              What type of damage was suffered?
            </div>
            <div className="content-right">
              <select name="damageSuffered" className="selectClass" onChange={handleOnchangeYourData}>
                <option value="" disabled>
                  Please select...
                </option>
                <option value="No Damage">
                  No Damage
                </option>
                <option value="Damaged-Amount-Known">
                  Damaged - Amount Known
                </option>
                <option value="Unknown">
                  Unknown
                </option>
                <option value="Write-Off">
                  Write-Off
                </option>
              </select>
            </div>
          </ContentWrapper>
        </MainWrapper>

        {/* Do you know the cost of the claim? (mandatory if you select "Type of damage - amount known") */}
        {
          yourDetails.damageSuffered == 'Damaged-Amount-Known' ? [(
            <>
              {/* Do you know the cost of the claim? (mandatory if you select "Type of damage - amount known") */}
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
                    Do you know the cost of the claim? (mandatory if you select "Type of damage - amount known")
                  </div>
                  <div className="content-right">
                    <input
                      type="text"
                      className="text_input"
                      name="damagedAmount"
                      onChange={handleOnchangeYourData}
                    />
                  </div>
                </ContentWrapper>
              </MainWrapper>
            </>
          )] : null
        }

        {/* Was this claim made against your insurance policy? */}
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
              Was this claim made against your insurance policy?
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
                  id="acwasClaim1"
                  name="claimedAgainstInsurance"
                  value="Yes"
                />
                <label htmlFor="acwasClaim1">yes</label>

                <input
                  onChange={handleOnchangeYourData}
                  type="radio"
                  id="radiwasClaim2"
                  name="claimedAgainstInsurance"
                  value="No"
                />
                <label htmlFor="radiwasClaim2">no</label>
              </RadioButtons>
            </div>
          </ContentWrapper>
        </MainWrapper>

        {/* Was the no claims discount affected? */}
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
            lastItem={true}
          >
            <div className="content-left">
              Was the no claims discount affected?
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
                  id="acwasClaimDiscount1"
                  name="claimedDiscountAffected"
                  value="Yes"
                />
                <label htmlFor="acwasClaimDiscount1">yes</label>

                <input
                  onChange={handleOnchangeYourData}
                  type="radio"
                  id="radiwasClaimDiscount2"
                  name="claimedDiscountAffected"
                  value="No"
                />
                <label htmlFor="radiwasClaimDiscount2">no</label>
              </RadioButtons>
            </div>
          </ContentWrapper>
        </MainWrapper>

        {/* add */}
        <NextPrevWrapper
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          primaryColor={theme.primaryColor}
        >
          <button type="button" onClick={closeModal} className="btn next active">
            close
          </button>
          {/* <button type="button" onClick={() => {


            let accidentClaimedDetails = {
              id: uuid(),
              incident: yourDetails.anyClaims,
              incidentOccur: yourDetails.incidentOccur,
              damagedAmount: yourDetails.damagedAmount,
              claimedAgainstInsurance: yourDetails.claimedAgainstInsurance,
              claimedDiscountAffected: yourDetails.claimedDiscountAffected,
            };


            setallClaimedInsurance([{ ...allClaimedInsurance }, accidentClaimedDetails]);
            console.log(accidentClaimedDetails);

          }} className="btn next">
            add
          </button> */}
        </NextPrevWrapper>

      </Modal>

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
                onChange={(e) => {
                  setyourDetails({ ...yourDetails, [e.target.name]: e.target.value });
                  setisLicenceMore(false);
                }}
                type="radio"
                id="tdriveLicence1"
                name="typeOfLicence"
                value="UK Full"
              />
              <label htmlFor="tdriveLicence1">UK Full</label>

              <input
                onChange={(e) => {
                  setyourDetails({ ...yourDetails, [e.target.name]: e.target.value });
                  setisLicenceMore(false);
                }}
                type="radio"
                id="tdriveLicence2"
                name="typeOfLicence"
                value="UK Provisional"
              />
              <label htmlFor="tdriveLicence2">UK Provisional</label>

              <input
                onChange={(e) => {
                  setyourDetails({ ...yourDetails, [e.target.name]: e.target.value });
                  setisLicenceMore(false);
                }}
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
          <p>If you haven’t passed your test by the time you take out this policy, please select the provisional option. Please note we can only provide quotes for UK provisional licence holders.</p>
        </ContentWrapper>
      </MainWrapper>

      {/* Select your licence type */}
      {isLicenceMore === true ? [(
        <>
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
                Select your licence type
              </div>
              <div className="content-right">

                <select name="typeOfLicence" className="selectClass" onChange={handleOnchangeYourData}>
                  <option value="" disabled>
                    Please select...
                  </option>
                  <option value="EU">
                    EU
                  </option>
                  <option value="European non-EU">
                    European non-EU
                  </option>
                  <option value="Internationa">
                    Internationa
                  </option>
                </select>
              </div>
            </ContentWrapper>
          </MainWrapper>
        </>
      )] : null}

      {/* How long have you held this licence? */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        id="yd_5"
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
            onClick={(e) => toggleClassForHover("yd_5")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            How long have you held this licence?
          </div>
          <div className="content-right">
            <select name="howLongLicenceHeld" className="selectClass" onChange={handleOnchangeYourData}>
              <option value="" disabled="">Please select...</option>
              <option value="0">Less than 1 Year</option>
              <option value="1">Between 1 and 2 Years</option>
              <option value="2">Between 2 and 3 Years</option>
              <option value="3">Between 3 and 4 Years</option>
              <option value="4">4 Years</option>
              <option value="5">5 Years</option>
              <option value="6">6 Years</option>
              <option value="7">7 Years</option>
              <option value="8">8 Years</option>
              <option value="9">9 Years</option>
              <option value="10">10 Years</option>
              <option value="11">11 Years</option>
              <option value="12">12 Years</option>
              <option value="13">13 Years</option>
              <option value="14">14 Years</option>
              <option value="15">15 Years</option>
              <option value="16">16 Years</option>
              <option value="17">17 Years</option>
              <option value="18">18 Years</option>
              <option value="19">19 Years</option>
              <option value="20">20 Years</option>
              <option value="21">21 Years</option>
              <option value="22">22 Years</option>
              <option value="23">23 Years</option>
              <option value="24">24 Years</option>
              <option value="25">25 Years +</option>
            </select>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <p>The amount of years selected needs to be the number of full years since you passed your practical driving test e.g. If you passed your test 2 years and 11 months ago, you must answer 2 years. You will need to enter the date you passed your test if it was less than 4 years ago. If you haven’t passed your test yet, this needs to be the number of years since you received your provisional licence.</p>

          <p>
            On a UK photo card licence, you can find the ‘valid from ’ date in section 10 on the back of your licence..</p>
        </ToolTipWrapper>
      </MainWrapper>

      {/* Have you passed any additional driving qualifications? */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        id="yd_6"
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
            onClick={(e) => toggleClassForHover("yd_6")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            Have you passed any additional driving qualifications?
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
                id="pasedQuaYd3"
                name="passedDrivingQualifications"
                value="Yes"
              />
              <label htmlFor="pasedQuaYd3">yes</label>

              <input
                onChange={(e) => {
                  setyourDetails({
                    ...yourDetails,
                    passedDrivingQualifications: e.target.value,
                    typesOfDrivingQualifications: '',
                    datesOfDrivingQualifications: ''
                  });


                }}
                type="radio"
                id="pasedQuaYd4"
                name="passedDrivingQualifications"
                value="No"
              />
              <label htmlFor="pasedQuaYd4">no</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <h4>Effect on your quote</h4>
          <p>Some insurers may offer a discount on your insurance premium if you hold an additional driving qualification such as Pass Plus, AA Proficiency, or Institute of Advanced Motorists.</p>
        </ToolTipWrapper>
      </MainWrapper>

      {yourDetails.passedDrivingQualifications === 'Yes' ? [(
        <>
          {/* Which type of driving qualification do you have? */}
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
                Which type of driving qualification do you have?
              </div>
              <div className="content-right">
                <select name="typesOfDrivingQualifications" className="selectClass" onChange={handleOnchangeYourData}>
                  <option value="" disabled>
                    Please select...
                  </option>
                  <option value="AA Proficiency">
                    AA Proficiency
                  </option>
                  <option value="Institute of Advanced Motorists">
                    Institute of Advanced Motorists
                  </option>
                  <option value="Pass Plus">
                    Pass Plus
                  </option>
                </select>
              </div>
            </ContentWrapper>
          </MainWrapper>
          {/* When did you get this qualification? */}
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
                When did you get this qualification?
              </div>
              <div className="content-right">
                <input
                  className="text_input"
                  type="date"
                  name="datesOfDrivingQualifications"
                  onChange={handleOnchangeYourData}
                />
              </div>
            </ContentWrapper>
          </MainWrapper>
        </>
      )] : null}

      {/* Do you have any medical conditions or disabilities that are DVLA reportable? */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        id="yd_7"
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
            onClick={(e) => toggleClassForHover("yd_7")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            Do you have any medical conditions or disabilities that are DVLA reportable?
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
                id="medCond@"
                name="hvMedicalConditions"
                value="Yes"
              />
              <label htmlFor="medCond@">yes</label>

              <input
                onChange={(e) => {
                  setyourDetails({
                    ...yourDetails,
                    hvMedicalConditions: e.target.value,
                    DVLAknowMedicalConditions: '',
                  });
                }}
                type="radio"
                id="Medconditions4"
                name="hvMedicalConditions"
                value="No"
              />
              <label htmlFor="Medconditions4">no</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <p>The DVLA and insurers need to know about any medical conditions or disabilities that may affect your ability to drive, or notifiable driving licence conditions. Some insurers require information about the condition before providing a quote. The DVLA has a list of conditions that they need to be told about: https://www.gov.uk/health-conditions-and-driving</p>
        </ToolTipWrapper>
      </MainWrapper>

      {/* Does the DVLA know about the medical condition or disability? */}
      {
        yourDetails.hvMedicalConditions == 'Yes' ? [(
          <>
            <MainWrapper
              primaryColor={theme.primaryColor}
              whiteColor={theme.whiteColor}
              id="yd_8"
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
                  onClick={(e) => toggleClassForHover("yd_8")}
                  className="mobile_trigger"
                >
                  <BsQuestionLg />
                </button>
                <div className="content-left">
                  Does the DVLA know about the medical condition or disability?
                </div>
                <div className="content-right">
                  <select onChange={handleOnchangeYourData} name="DVLAknowMedicalConditions" className="selectClass">
                    <option value="" disabled="">Please select...</option>
                    <option value="DVR">DVLA aware - No restrictions</option>
                    <option value="DV1">DVLA aware - 1 year restricted Licence</option>
                    <option value="DV2">DVLA aware - 2 year restricted Licence</option>
                    <option value="DV3">DVLA aware - 3 year restricted Licence</option>
                    <option value="DVU">DVLA unaware</option>
                  </select>
                </div>
              </ContentWrapper>
              <ToolTipWrapper
                open={openToolTip}
                primaryColor={theme.primaryColor}
                whiteColor={theme.whiteColor}
                blackColor={theme.blackColor}
              >
                <p>The DVLA and insurers need to know about any medical conditions or disabilities that may affect your ability to drive, or notifiable driving licence conditions. Some insurers require information about the condition before providing a quote. The DVLA has a list of conditions that they need to be told about: https://www.gov.uk/health-conditions-and-driving</p>
              </ToolTipWrapper>
            </MainWrapper>
          </>
        )] : null
      }
      {/* Have you ever had an insurance policy declined, cancelled, voided or had special terms imposed? */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        id="yd_9"
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
            onClick={(e) => toggleClassForHover("yd_9")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            Have you ever had an insurance policy declined, cancelled, voided or had special terms imposed?
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
                id="insDec1"
                name="insuranceDeclined"
                value="Yes"
              />
              <label htmlFor="insDec1">yes</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="insDec2"
                name="insuranceDeclined"
                value="No"
              />
              <label htmlFor="insDec2">no</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <p>Insurance providers may cancel, decline or void a policy if anyone named on the policy misrepresented or failed to disclose important facts that are required to fulfil the policy terms and conditions.</p>

          <p>
            All insurance policies have standard terms and conditions. If you’ve ever had special terms imposed, you would have been advised by the insurance provider before the policy was taken out or renewed.</p>
        </ToolTipWrapper>
      </MainWrapper>

      {/* Have you got any unspent non-motoring-related criminal convictions? */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        id="yd_10"
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
            onClick={(e) => toggleClassForHover("yd_10")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            Have you got any unspent non-motoring-related criminal convictions?
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
                id="criminalConvictions1"
                name="criminalConvictions"
                value="Yes"
              />
              <label htmlFor="criminalConvictions1">yes</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="criminalConvictions2"
                name="criminalConvictions"
                value="No"
              />
              <label htmlFor="criminalConvictions2">no</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <p>After a specified period of time some criminal convictions are considered 'spent' and no longer need to be disclosed to your insurer. If you have a criminal conviction, you can use UNLOCK's online tool to calculate if it is spent (www.disclosurecalculator.org.uk). Disclosure requirements can vary depending on where you live in the UK.</p>

        </ToolTipWrapper>
      </MainWrapper>

      {/* Claims Have you had any motor accidents, claims or losses in the past 5 years, no matter who was at fault or if a claim was made? */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        id="yd_11"
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
            onClick={(e) => toggleClassForHover("yd_11")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            Have you had any motor accidents, claims or losses in the past 5 years, no matter who was at fault or if a claim was made?
          </div>
          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                // onChange={handleOnchangeYourData}
                onClick={openModal}
                type="radio"
                id="clasunsAccLossesFiveYears1"
                name="anyClaims"
                value="Yes"
              />
              <label htmlFor="clasunsAccLossesFiveYears1">yes</label>

              <input
                onChange={handleOnchangeYourData}
                type="radio"
                id="clasunsAccLossesFiveYears2"
                name="anyClaims"
                value="No"
              />
              <label htmlFor="clasunsAccLossesFiveYears2">no</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <p>It is really important to tell us about any claims (including unsettled claims), accidents or losses that are motor vehicle related.</p>

        </ToolTipWrapper>
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
