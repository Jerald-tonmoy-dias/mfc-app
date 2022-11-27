import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../BaseUrl";
// creating context api
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  /**********************************
   *
   * GLOABL STATES
   *
   **********************************/
  //loading
  const [loading, setLoading] = useState(false);
  // not found data
  const [notFound, setnotFound] = useState(false);
  // all nav list
  const [navList, setnavList] = useState([
    {
      id: 1,
      name: "Your vehicle",
      status: false, //pass
      current: false,
    },
    {
      id: 2,
      name: "Your details",
      status: false, //pass
      current: false,
    },
    {
      id: 3,
      name: "Your policy",
      status: false, //pass
      current: false,
    },
    {
      id: 4,
      name: "Your summary",
      status: false, //pass
      current: true,
    },
    {
      id: 5,
      name: "Your quotes",
      status: false, //pass
      current: false,
    },
  ]);
  // count steps
  const [countSteps, setCountSteps] = useState(0);
  // check value passed
  const [checkVehicle, setcheckVehicle] = useState(false);

  /**********************************
   *
   * YOUR VEHICLE STATES
   *
   **********************************/
  // get all vehicle data
  const [vehicleDetails, setvehicleDetails] = useState(null); //coming from api data
  // setVeicle data
  const [vehicleData, setVehicleData] = useState({
    typeOfAlarm: "", //select option
    tranckingDevice: "", //radio option
    imported: "", //radio option
    driveHand: "",
    isModified: false, //not assign yet
    modifiedCaused: "", //not assign yet
    leaseCarDate: '',
    usedCarFor: "",
    businessuseFor: "",
    whobusinessuseFor: "", //select
    annualBusinessMileage: "",
    annualPersonalMileage: "",
    keepCarAtDay: "",
    keepCarAtNight: "",
    carKeptAtHousehold: "",
    useAnyOtherVehicles: "",
  });
  // lease car date
  const [dontHvCar, setdontHvCar] = useState(false);
  // SDPC and Business Use
  const [sdpcBusinessUse, setsdpcBusinessUse] = useState(false);
  // keep car at night more option
  const [kepCarNightMoreOption, setkepCarNightMoreOption] = useState(false);

  /**********************************
   *
   * YOUR DETAILS
   *
   **********************************/
  const [yourDetails, setyourDetails] = useState({
    yourTitle: "",
    firstName: "",
    lastName: "",
    yourDateOfBirth: "",
    relationshipStatus: "",
    ownYourHome: "",
    childrenUnderAgeLiveWith: "",
    address: "",
    town_city: "",
    postcode: "",
    employment_status: "",
    employment_profession: "",
    livedInUk: "",
    typeOfLicence: "",
    howLongLicenceHeld: "",
    passedDrivingQualifications: "",
    typesOfDrivingQualifications: "",
    datesOfDrivingQualifications: "",
    hvMedicalConditions: "",
    DVLAknowMedicalConditions: "",
    insuranceDeclined: "",
    criminalConvictions: "",

    anyClaims: "",
    incidentOccur: "",
    damageSuffered: "", //if yes
    damagedAmount: "", // if damage was suffered selected
    claimedAgainstInsurance: "",
    claimedDiscountAffected: "",
    maxVoluntaryExcess: "",
  });

  const [allClaimedInsurance, setallClaimedInsurance] = useState([]);
  //employment_profession
  const [is_professionActive, setis_professionActive] = useState(false);
  const [isLicenceMore, setisLicenceMore] = useState(false);
  const [isLivedSinceBirth, setisLivedSinceBirth] = useState(false);

  /**********************************
   *
   * YOUR POLICY
   *
   **********************************/
  const [yourPolicy, setyourPolicy] = useState({
    mainDrive: "",
    AreYouregLegalOwner: "",
    whoRegKeeper: "",
    whoLegalOwner: "",
    typeOfCover: "",
    payForCarInsurance: "",
    NCDHaveYear: "",
    howEarnNCD: "",
    personalAccidentCover: "",
    courtesyCar: "",
    breakdownCover: "",
    motorLegalProtection: "",
    yourEmail: "",
    yourTelephoneNumber: "",
    insuranceProvidersAnswerQueries: "",
    contactEmail: false,
    contactPhone: false,
    contactText: false,
    contactPost: false,
    doNotContact: false,
    TermsConditions: false
  });

  return (
    <StoreContext.Provider
      value={{
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

        // all vehicle data
        vehicleData,
        setVehicleData,
        dontHvCar,
        setdontHvCar,
        sdpcBusinessUse,
        setsdpcBusinessUse,
        kepCarNightMoreOption,
        setkepCarNightMoreOption,

        // your details
        yourDetails,
        setyourDetails,
        isLivedSinceBirth,
        setisLivedSinceBirth,
        isLicenceMore,
        setisLicenceMore,
        allClaimedInsurance,
        setallClaimedInsurance,

        // your policy
        yourPolicy,
        setyourPolicy,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
