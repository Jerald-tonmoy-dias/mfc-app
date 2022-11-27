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
  CheckBoxElement,
} from "../Form.styled";
import { BASE_URL } from "../../../BaseUrl";
import { StoreContext } from "../../../context/Store";
import { AiFillCar, AiTwotoneLock, AiFillMail, AiOutlineFileDone } from "react-icons/ai";
import Navbar from "../../navbar/Navbar";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMessageRoundedDots } from "react-icons/bi";

export default function AccountAndContactDetails() {
  // gettting context value
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
    yourDetails,
    setyourDetails,
    isLivedSinceBirth,
    setisLivedSinceBirth,
    isLicenceMore,
    setisLicenceMore,
    allClaimedInsurance,
    setallClaimedInsurance,
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
  const [openToolTip, setopenToolTip] = useState(false);
  // modal var and states
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      backgroundColor: theme.grayColor,
      width: "50%",
      overflow: "scroll",
      height: "calc(100 % - 130px)",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "block",
      zIndex: "99999",
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
    setCountSteps(4);
  };

  // handle onchange function
  const handleOnchangeYourData = (e) => {
    setyourPolicy({ ...yourPolicy, [e.target.name]: e.target.value });
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
      <Navbar navItem={3} navpassed={false} />
      <Title color={theme.blackColor}>Your account and contact details</Title>

      <MainWrapper liteBlackColor={theme.liteBlackColor}>
        <div className="add_product_section">
          <p className="para_with_icons">
            <span className="icon">
              <AiFillCar />
            </span>
            View this quote later, by signing into your account using this email
          </p>
          <p className="para_with_icons">
            <span className="icon">
              <AiTwotoneLock />
            </span>
            You will need to access your inbox to set up your password
          </p>
          <p className="para_with_icons">
            <span className="icon">
              <AiFillMail />
            </span>
            We will send you an email confirming our prices and another to
            invite you to join or let you know that you’ve automatically been
            given Meerkat Meals and Meerkat Movies once you have made a
            qualifying purchase
          </p>
        </div>
      </MainWrapper>

      {/* Email */}
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
          <div className="content-left">Email</div>
          <div className="content-right">
            <input
              type="email"
              className="text_input"
              name="YourEmail"
              placeholder="Email"
              onChange={handleOnchangeYourData}
            />
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* Main telephone number (optional) */}
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
          <div className="content-left">Main telephone number (optional)</div>
          <div className="content-right">
            <input
              type="text"
              className="text_input"
              name="yourTelephoneNumber"
              placeholder="eg. home phone or mobile phone"
              onChange={handleOnchangeYourData}
            />
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* Let the insurance providers answer your queries */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
      >
        <div className="border_with_section">
          <div className="header-title">
            <h4> Let the insurance providers answer your queries</h4>
          </div>
          <ContentWrapper
            liteBlackColor={theme.liteBlackColor}
            borderColor={theme.liteBlackColor}
            whiteColor={theme.whiteColor}
            blackColor={theme.blackColor}
            secondaryColor={theme.secondaryColor}
          >
            <div className="content-left">
              Are you happy for the insurance providers with the two lowest
              prices to contact you to discuss your quote?
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
                  id="happyforInsurance1"
                  name="personalAccidentCover"
                  value="Yes"
                />
                <label htmlFor="happyforInsurance1">Yes, please</label>

                <input
                  onChange={handleOnchangeYourData}
                  type="radio"
                  id="happyforInsurance2"
                  name="personalAccidentCover"
                  value="No/I'll decide later"
                />
                <label htmlFor="happyforInsurance2">No, thanks</label>
              </RadioButtons>
            </div>
            <p>
              By lowest price, we mean the lowest annual amount you’d pay if you
              choose to pay in a single payment.
            </p>
          </ContentWrapper>
        </div>
      </MainWrapper>

      {/* We’ll do the work for you */}
      <MainWrapper
        primaryColor={theme.primaryColor}
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
      >
        <div className="border_with_section">
          <div className="header-title">
            <h4> We’ll do the work for you</h4>
          </div>
          <div className="make_life_simple">
            <h3>Make life simples</h3>
            <p>
              We’ll send you renewal reminders to help you stay on top of your
              bills, the latest deals, and more ways to save you money.
            </p>

            <h3>We’ll also send you...</h3>
            <p>
              The latest on how to claim Rewards* such as restaurant discounts,
              and 2 for 1 cinema tickets.
            </p>
            <h3>Choose how we contact you</h3>

            <CheckBoxElement
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                onChange={(e) => {
                  setyourPolicy({ ...yourPolicy,
                     [e.target.name]: !yourPolicy.contactEmail ,
                     ['doNotContact']:false,});
                }}
                class="check_input"
                checked={yourPolicy.contactEmail}
                id="emailForAcc1"
                type="checkbox"
                name="contactEmail"
                value="Yes"
              />
              <label htmlFor="emailForAcc1">
                <span class="content_wrapper">
                  <span class="icon">
                    <AiFillMail />
                  </span>
                  <span class="title">Email</span>
                </span>
              </label>

              <input
                onChange={(e) => {
                  setyourPolicy({ ...yourPolicy, [e.target.name]: !yourPolicy.contactPhone,
                    ['doNotContact']:false, });
                }}
                class="check_input"
                checked={yourPolicy.contactPhone}
                id="phoneForAcc1"
                type="checkbox"
                name="contactPhone"
                value="Yes"
              />
              <label htmlFor="phoneForAcc1">
                <span class="content_wrapper">
                  <span class="icon">
                    <BsFillTelephoneFill />
                  </span>
                  <span class="title">Phone</span>
                </span>
              </label>

              <input
                onChange={(e) => {
                  setyourPolicy({ ...yourPolicy, [e.target.name]: !yourPolicy.contactText ,
                    ['doNotContact']:false,});
                }}
                class="check_input"
                checked={yourPolicy.contactText}
                id="textForAcc1"
                type="checkbox"
                name="contactText"
                value="Yes"
              />
              <label htmlFor="textForAcc1">
                <span class="content_wrapper">
                  <span class="icon">
                    <BiMessageRoundedDots />
                  </span>
                  <span class="title">Text</span>
                </span>
              </label>

              <input
                onChange={(e) => {
                  setyourPolicy({ ...yourPolicy, [e.target.name]: !yourPolicy.contactPost,
                    ['doNotContact']:false, });
                }}
                class="check_input"
                checked={yourPolicy.contactPost}
                id="PostForAcc1"
                type="checkbox"
                name="contactPost"
                value="Yes"
              />
              <label htmlFor="PostForAcc1">
                <span class="content_wrapper">
                  <span class="icon">
                    <AiOutlineFileDone />
                  </span>
                  <span class="title">Post</span>
                </span>
              </label>

              <input
                onChange={(e) => {
                  setyourPolicy({ ...yourPolicy,
                    [e.target.name]: !yourPolicy.doNotContact,
                    ['contactEmail']:false,
                    ['contactPhone']:false,
                    ['contactText']:false,
                    ['contactPost']:false,
                  
                    }
                     );
                }}
                checked={yourPolicy.doNotContact}
                class="check_input"
                id="doNotContactForAcc1"
                type="checkbox"
                name="doNotContact"
                value="Yes"
              />
              <label htmlFor="doNotContactForAcc1">
                <span class="content_wrapper">
                  <span class="title">do not contact</span>
                </span>
              </label>
            </CheckBoxElement>
          </div>
        </div>
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
