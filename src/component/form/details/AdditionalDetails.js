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

export default function AdditionalDetails() {
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
    setCountSteps(4);
  };

  // handle onchange function
  const handleOnchangeYourData = (e) => {
    setyourDetails({ ...yourDetails, [e.target.name]: e.target.value });
  };



  return (
    <div>
      <Navbar navItem={2} navpassed={false} />
      <Title color={theme.blackColor}>Personal details</Title>
      <MainWrapper>
        <ContentWrapper
          borderColor={theme.liteBlackColor}
          liteBlackColor={theme.liteBlackColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
          primaryColor={theme.primaryColor}
          secondaryColor={theme.secondaryColor}
        >
          <div className="content-left">
            <h2>Personal details</h2>
          </div>
          <div className="content-right">
            <div className="has_bg">
              <p>
                <span className="lg-text">
                  {yourDetails.firstName}{" "} {yourDetails.lastName}
                </span>
                <span className="lg-text">
                  {yourDetails.employment_status} {yourDetails.employment_profession}
                </span>

                <br />
                <span className="small-text">
                  License {yourDetails.typeOfLicence}{" "}
                </span>
                <br />
                <span className="small-text">
                  ,held for  {yourDetails.howLongLicenceHeld}{" "} year{" "}
                </span>
                <br />
                <span className="small-text">
                  {yourDetails.anyClaims !== '' ? 'Claims against ' + yourDetails.anyClaims : 'No claims'}
                </span>
              </p>

            </div>
          </div>
          <div className="tooltip"></div>
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
