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
import { HiUsers } from "react-icons/hi";
import Navbar from "../../navbar/Navbar";

export default function Vehicle() {
  /******************************************
   * GETTING CONTEXT VALUE
   ******************************************/
  const theme = useContext(ThemeContext);
  let {
    // global states
    loading,
    setLoading,
    navList,
    setnavList,
    countSteps,
    setCountSteps,
    vehicleDetails,
    setvehicleDetails,
    notFound,
    setnotFound,
    checkVehicle,
    setcheckVehicle,

    // vehicle states
    typeofAlarm,
    settypeofAlarm,
    tranckingDevice,
    settranckingDevice,
    imported,
    setImported,
    driveHand,
    setdriveHand,
    isModified,
    setisModified,
    modifiedCaused,
    setmodifiedCaused,
    leaseCarDate,
    setleaseCarDate,
    dontHvCar,
    setdontHvCar,
    usedCarFor,
    setusedCarFor,
    sdpcBusinessUse,
    setsdpcBusinessUse,
    businessuseFor,
    setbusinessuseFor,
    whobusinessuseFor,
    setwhobusinessuseFor,
    // annualBusinessMileage,
    // setannualBusinessMileage,
    annualPersonalMileage,
    setannualPersonalMileage,
  } = useContext(StoreContext);

  /******************************************
   * VARIABLES AND STATES
   ******************************************/
  let { VehicleRegistration } = vehicleDetails;
  const [openToolTip, setopenToolTip] = useState(false);
  const [annualBusinessMileage,setannualBusinessMileage] = useState('');
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

  // businesUseCarFun
  const businesUseCarFun = (e) => {
    setwhobusinessuseFor(e.target.value);
  };

  return (
    <form>
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
          <div className="content-right">
            <select className="selectClass" onChange={typeofAlermFunc}>
              <option value="" disabled>
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
              <label htmlFor="radio1">yes</label>

              <input
                onChange={(e) => settranckingDevice(e.target.value)}
                type="radio"
                id="radio2"
                name="radios"
                value="No"
              />
              <label htmlFor="radio2">no</label>
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
              <input
                onChange={(e) => setImported(e.target.value)}
                type="radio"
                id="import_vehicle_1"
                name="radios"
                value="Yes"
              />
              <label htmlFor="import_vehicle_1">yes</label>

              <input
                onChange={(e) => setImported(e.target.value)}
                type="radio"
                id="import_vehicle_2"
                name="radios"
                value="No"
              />
              <label htmlFor="import_vehicle_2">no</label>
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

      {/* Is the car left or right hand drive? */}
      <MainWrapper
        id="vh_3"
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
            onClick={(e) => toggleClassForHover("vh_3")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            Is the car left or right hand drive?
          </div>
          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                onChange={(e) => setdriveHand(e.target.value)}
                type="radio"
                id="hand_drive_1"
                name="radios"
                value="left"
              />
              <label htmlFor="hand_drive_1">Left</label>

              <input
                onChange={(e) => setdriveHand(e.target.value)}
                type="radio"
                id="hand_drive_2"
                name="radios"
                value="right"
              />
              <label htmlFor="hand_drive_2">Right</label>
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
              Right hand drive is the UK standard. This means that when you are
              sat in the vehicle facing the windscreen, the steering wheel is on
              the right side.
            </p>
          </div>
        </ToolTipWrapper>
      </MainWrapper>

      {/* When did you buy or start to lease this car? */}
      <MainWrapper
        id="vh_4"
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
            onClick={(e) => toggleClassForHover("vh_4")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">
            When did you buy or start to lease this car?
          </div>
          <div className="content-right">
            <input
              disabled={dontHvCar}
              className="text_input"
              type="date"
              onChange={(e) => setleaseCarDate(e.target.value)}
            />
            <div className="car_checkbox_wrapper">
              <input
                id="have_car"
                type="checkbox"
                onChange={(e) => setdontHvCar(e.target.checked)}
              />
              <label htmlFor="have_car">I don't have car</label>
            </div>
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
              Right hand drive is the UK standard. This means that when you are
              sat in the vehicle facing the windscreen, the steering wheel is on
              the right side.
            </p>
          </div>
        </ToolTipWrapper>
      </MainWrapper>

      {/* What do you use the car for? */}
      <MainWrapper
        id="vh_5"
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
            onClick={(e) => toggleClassForHover("vh_5")}
            className="mobile_trigger"
          >
            <BsQuestionLg />
          </button>
          <div className="content-left">What do you use the car for?</div>

          <div className="content-right">
            <RadioButtons
              primaryColor={theme.primaryColor}
              blackColor={theme.blackColor}
              whiteColor={theme.whiteColor}
            >
              <input
                onChange={(e) => {
                  setusedCarFor(e.target.value);
                  setsdpcBusinessUse(false);
                }}
                type="radio"
                id="usedForCar1"
                value="Social, Domestic and Pleasure (SDP) only"
              />
              <label htmlFor="usedForCar1">
                Social, Domestic and Pleasure (SDP) only
              </label>

              <input
                onChange={(e) => {
                  setusedCarFor(e.target.value);
                  setsdpcBusinessUse(false);
                }}
                type="radio"
                id="usedForCar2"
                value="Social, Domestic Pleasure & Commuting (SDPC)"
              />
              <label htmlFor="usedForCar2">
                Social, Domestic Pleasure & Commuting (SDPC)
              </label>

              <input
                onChange={(e) => {
                  setusedCarFor(null);
                  setsdpcBusinessUse(!sdpcBusinessUse);
                }}
                type="radio"
                id="usedForCar3"
                value="SDPC & Business Use"
              />
              <label htmlFor="usedForCar3">SDPC & Business Use</label>
            </RadioButtons>
          </div>
        </ContentWrapper>
        <ToolTipWrapper
          open={openToolTip}
          primaryColor={theme.primaryColor}
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <h4>Social, Domestic and Pleasure (SDP) only</h4>
          <p>
            This is when you use the car for general day to day appointments,
            visiting family and friends, shopping.
          </p>
          <h4>Social, Domestic Pleasure & Commuting (SDPC)</h4>
          <p>
            This is the above but also includes commuting to and from your
            single permanent place of work.
          </p>
          <h4>SDPC & Business Use</h4>
          <p>
            This is the above but also includes business use. Business use is
            travelling to and from more than one location for business purposes.
            Business use can be selected to include your spouse / additional
            drivers.
          </p>
        </ToolTipWrapper>
      </MainWrapper>

      {sdpcBusinessUse == true
        ? [
            <>
              {/* Who uses the car for business use? */}
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
                    Who uses the car for business use?
                  </div>

                  <div className="content-right">
                    <select className="selectClass" onChange={businesUseCarFun}>
                      <option value="" disabled="">
                        Please select...
                      </option>
                      <option value="only you">only you</option>
                      <option value="any named drive">Any named drive</option>
                    </select>

                    {whobusinessuseFor == "any named drive"
                      ? [
                          <div className="hint-text-wrapper">
                            <HiUsers className="icon" />
                            <span className="hint-text">
                              Don’t forget to add your named driver(s) in the
                              additional drivers section.
                            </span>
                          </div>,
                        ]
                      : null}
                  </div>
                </ContentWrapper>
              </MainWrapper>

              {/* What is the total annual business mileage for this car?*/}
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
                    What is the total annual business mileage for this car?
                  </div>

                  <div className="content-right">
                    <div className="text_input_box">
                      <input
                        type="text"
                        onChange={(e)=>setannualBusinessMileage(e.target.value)}
                        placeholder="$8,500"

                      />
                      <label>miles per year</label>
                    </div>
                  </div>
                </ContentWrapper>
              </MainWrapper>
            </>,
          ]
        : null}

      {/* next prev buttons */}
      <MainWrapper>
        <NextPrevWrapper
          whiteColor={theme.whiteColor}
          blackColor={theme.blackColor}
        >
          <button type="button" onClick={nextpageFunction} className="btn next">
            next
          </button>
        </NextPrevWrapper>
      </MainWrapper>
    </form>
  );
}
