import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
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
import { toggleClassForHover } from "../../../helper/helper";
import { StoreContext } from "../../../context/Store";
import {
  BsFillPencilFill,
  BsPencil,
  BsQuestionLg,
  BsSearch,
  BsXOctagonFill,
} from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import Navbar from "../../navbar/Navbar";

export default function Vehicle() {
  /******************************************
   * GETTING CONTEXT VALUE
   ******************************************/
  const theme = useContext(ThemeContext);
  let {
    // global
    loading,
    setLoading,
    vehicleDetails,
    countSteps,
    setCountSteps,
    setvehicleDetails,
    setcheckVehicle,
    navList,
    setnavList,

    // vehicle
    typeofAlarm,
    settypeofAlarm,
    tranckingDevice,
    settranckingDevice,
    imported,
    setImported,
  } = useContext(StoreContext);

  /******************************************
   * VARIABLES AND STATES
   ******************************************/
  let { VehicleRegistration } = vehicleDetails;
  const [openToolTip, setopenToolTip] = useState(false);
  const [modelNo, setModelNo] = useState(null);

  /******************************************
   * FUNCTIONS
   ******************************************/
  // nextpageFunction function
  const nextpageFunction = () => {
    // after validation is done
    setCountSteps(2);
  };

  // typeofAlermFunc
  const typeofAlermFunc = (e) => {
    settypeofAlarm(e.target.value);
  };

  return (
    <div>
      <Navbar navItem={1} navpassed={false} />
      <Title color={theme.blackColor}>vehicle details</Title>

      {/* We’ve found your vehicle */}
      <MainWrapper>
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
      </MainWrapper>

      {/* What type of alarm and/or immobiliser does the car have? */}
      <MainWrapper
        id="vh_1"
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
          <button
            type="button"
            onClick={(e) => toggleClassForHover("vh_1")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            What type of alarm and/or immobiliser does the car have?
          </div>
          <div className="content-right" onChange={typeofAlermFunc}>
            <select className="selectClass">
              <option value="" disabled="">
                Please select...
              </option>
              <option value="Factory Fitted Thatcham Approved Alarm/Immobiliser">
                Factory Fitted Thatcham Approved Alarm/Immobiliser
              </option>
              <option value="Factory Fitted Thatcham Approved Alarm">
                Factory Fitted Thatcham Approved Alarm
              </option>
              <option value="Factory Fitted Non-Thatcham Alarm/Immobiliser">
                Factory Fitted Non-Thatcham Alarm/Immobiliser
              </option>
              <option value="Factory Fitted Non-Thatcham Alarm">
                Factory Fitted Non-Thatcham Alarm
              </option>
              <option value="Factory Fitted">Factory Fitted</option>
              <option value="None">None</option>
            </select>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <div className="icon_p_wrapper">
            <BsQuestionLg className="hint-icon" />
            <p>
              If your immobiliser is not factory fitted, please select “None”.
            </p>
          </div>
          <div className="icon_p_wrapper">
            <BsSearch className="hint-icon" />
            <p>If you’re unsure, you should check the owner’s manual.</p>
          </div>
        </ToolTipWrapper>
      </MainWrapper>

      {/* Is the car fitted with a tracking device? */}
      <MainWrapper>
        <ContentWrapper
          liteBlackColor={theme.liteBlackColor}
          borderColor={theme.liteBlackColor}
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
              <input
                onChange={(e) => settranckingDevice(e.target.value)}
                type="radio"
                id="radio1"
                name="radios"
                value="Yes"
              />
              <label for="radio1">yes</label>

              <input
                onChange={(e) => settranckingDevice(e.target.value)}
                type="radio"
                id="radio2"
                name="radios"
                value="No"
              />
              <label for="radio2">no</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
      </MainWrapper>

      {/* Is the car an import? */}
      <MainWrapper
        id="vh_2"
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
          <button
            type="button"
            onClick={(e) => toggleClassForHover("vh_2")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">Is the car an import?</div>
          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input onChange={(e)=> setImported(e.target.value)} type="radio" id="import_vehicle_1" name="radios" value="Yes" />
              <label for="import_vehicle_1">yes</label>

              <input onChange={(e)=> setImported(e.target.value)} type="radio" id="import_vehicle_2" name="radios" value="No" />
              <label for="import_vehicle_2">no</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <div className="icon_p_wrapper">
            <BsQuestionLg className="hint-icon" />
            <p>
              Imports are vehicles made to be sold outside of the UK then
              imported into the UK.
            </p>
          </div>
          <div className="icon_p_wrapper">
            <BsSearch className="hint-icon" />
            <p>Check the log book if you are unsure.</p>
          </div>
        </ToolTipWrapper>
      </MainWrapper>

      {/* <NextPrevWrapper
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
      >
        <button type="button" onClick={nextpageFunction} className="btn next">
          next
        </button>
      </NextPrevWrapper> */}
    </div>
  );
}
