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

export default function Policy() {
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
    yourDetails, setyourDetails,
    isLivedSinceBirth, setisLivedSinceBirth,
    isLicenceMore, setisLicenceMore,
    allClaimedInsurance, setallClaimedInsurance,
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
      <Title color={theme.blackColor}>Policy Details</Title>

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
