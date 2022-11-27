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
import {
  AiFillCar,
  AiTwotoneLock,
  AiFillMail,
  AiOutlineFileDone,
} from "react-icons/ai";
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
    setCountSteps(7);
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
            hoveNone={true}
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
                  setyourPolicy({
                    ...yourPolicy,
                    [e.target.name]: !yourPolicy.contactEmail,
                    ["doNotContact"]: false,
                  });
                }}
                className="check_input"
                checked={yourPolicy.contactEmail}
                id="emailForAcc1"
                type="checkbox"
                name="contactEmail"
                value="Yes"
              />
              <label htmlFor="emailForAcc1">
                <span className="content_wrapper">
                  <span className="icon">
                    <AiFillMail />
                  </span>
                  <span className="title">Email</span>
                </span>
              </label>

              <input
                onChange={(e) => {
                  setyourPolicy({
                    ...yourPolicy,
                    [e.target.name]: !yourPolicy.contactPhone,
                    ["doNotContact"]: false,
                  });
                }}
                className="check_input"
                checked={yourPolicy.contactPhone}
                id="phoneForAcc1"
                type="checkbox"
                name="contactPhone"
                value="Yes"
              />
              <label htmlFor="phoneForAcc1">
                <span className="content_wrapper">
                  <span className="icon">
                    <BsFillTelephoneFill />
                  </span>
                  <span className="title">Phone</span>
                </span>
              </label>

              <input
                onChange={(e) => {
                  setyourPolicy({
                    ...yourPolicy,
                    [e.target.name]: !yourPolicy.contactText,
                    ["doNotContact"]: false,
                  });
                }}
                className="check_input"
                checked={yourPolicy.contactText}
                id="textForAcc1"
                type="checkbox"
                name="contactText"
                value="Yes"
              />
              <label htmlFor="textForAcc1">
                <span className="content_wrapper">
                  <span className="icon">
                    <BiMessageRoundedDots />
                  </span>
                  <span className="title">Text</span>
                </span>
              </label>

              <input
                onChange={(e) => {
                  setyourPolicy({
                    ...yourPolicy,
                    [e.target.name]: !yourPolicy.contactPost,
                    ["doNotContact"]: false,
                  });
                }}
                className="check_input"
                checked={yourPolicy.contactPost}
                id="PostForAcc1"
                type="checkbox"
                name="contactPost"
                value="Yes"
              />
              <label htmlFor="PostForAcc1">
                <span className="content_wrapper">
                  <span className="icon">
                    <AiOutlineFileDone />
                  </span>
                  <span className="title">Post</span>
                </span>
              </label>

              <input
                onChange={(e) => {
                  setyourPolicy({
                    ...yourPolicy,
                    [e.target.name]: !yourPolicy.doNotContact,
                    ["contactEmail"]: false,
                    ["contactPhone"]: false,
                    ["contactText"]: false,
                    ["contactPost"]: false,
                  });
                }}
                checked={yourPolicy.doNotContact}
                className="check_input"
                id="doNotContactForAcc1"
                type="checkbox"
                name="doNotContact"
                value="Yes"
              />
              <label htmlFor="doNotContactForAcc1">
                <span className="content_wrapper">
                  <span className="title">do not contact</span>
                </span>
              </label>
            </CheckBoxElement>
          </div>
        </div>
      </MainWrapper>

      {/* What you need to know about how your data will be used: */}
      <MainWrapper>
        <div>
          <p>
            <strong>
              What you need to know about how your data will be used:
            </strong>
          </p>
          <ul className="AssumptionsMade">
            <li>
              You can find full details of how your data will be used including
              information about your rights in our{" "}
              <a href="#" target="_blank">
                <span>Privacy Policy</span>
              </a>{" "}
              which you should read before progressing.
            </li>
            <li>
              Some insurance providers carry out soft credit checks on your data
              and credit history. These are not full credit searches and will
              not affect your credit rating.
            </li>
            <li>
              Some insurance providers may use data they already hold about you
              (for example, data from existing products, loyalty scheme or
              transactional data) to assess and rate your cover and determine
              your premium.
            </li>
            <li>
              If you are providing information about someone else you must make
              sure they are aware of our{" "}
              <a href="#" target="_blank">
                <span>Privacy Policy</span>
              </a>
              .
            </li>
            <li>
              In the future we will automatically check your{" "}
              <a href="#" target="_blank">
                <span>most relevant quote</span>
              </a>{" "}
              with{" "}
              <a href="#" target="_blank">
                <span>some of our insurance providers</span>
              </a>{" "}
              to see what your price could be for your future renewal. We’ll use
              the data you have already provided and notify you when your quotes
              are ready in your account. Some of our insurance providers may
              carry out a soft credit search which does not impact your credit
              score.
            </li>
            <li>
              Checking for better car insurance deals before you need to renew
              is included automatically as part of the service we provide, but
              you can turn it off at any time by adjusting the settings under
              ‘Contact Preferences’. You can access your preferences via your{" "}
              <strong>quotemeeasy</strong>.com account or by following a link in
              any future emails. If you don’t have an account, you can easily
              create one by registering for one after seeing your quotes.
            </li>
          </ul>
        </div>
      </MainWrapper>

      {/* terms and conditions */}
      <MainWrapper>
        <ContentWrapper lastItem={true} hoveNone={true}>
          <div className="terms_conditions_section">
            <p>
              Please tick this box to confirm you have read and understood our
              website Terms and Conditions, About Us, and Rewards Terms and
              Conditions. If you do not understand any items within these
              documents please contact us.
            </p>
            <div className="termsCondInputWrapper">
              <div class="form-group">
                <input
                  onChange={(e) => {
                    setyourPolicy({
                      ...yourPolicy,
                      [e.target.name]: !yourPolicy.TermsConditions,

                    });
                  }}
                  id="fortermsCondInput"
                  type="checkbox"
                  name="TermsConditions"
                />
                <label for="fortermsCondInput"></label>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </MainWrapper>

      <hr />

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
