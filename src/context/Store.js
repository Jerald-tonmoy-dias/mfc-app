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
  const [vehicleDetails, setvehicleDetails] = useState(null);
  // typeofAlarm
  const [typeofAlarm, settypeofAlarm] = useState(null);
  // trancking device
  const [tranckingDevice, settranckingDevice] = useState(null);
  // is imported
  const [imported, setImported] = useState(null);
  // current value of car
  const [driveHand, setdriveHand] = useState(null);
  // modified
  const [isModified, setisModified] = useState(false);
  // modified caused
  const [modifiedCaused, setmodifiedCaused] = useState(false);
  // lease car date
  const [leaseCarDate, setleaseCarDate] = useState(new Date());
  // lease car date
  const [dontHvCar, setdontHvCar] = useState(true);
  // lease car date
  const [usedCarFor, setusedCarFor] = useState(null);
  // SDPC and Business Use
  const [sdpcBusinessUse,setsdpcBusinessUse] = useState(false);
  // business use for 
  const [businessuseFor,setbusinessuseFor] = useState(null);

  return (
    <StoreContext.Provider
      value={{
        // global states
        loading,setLoading,
        navList,setnavList,
        countSteps,setCountSteps,
        vehicleDetails,setvehicleDetails,
        notFound,setnotFound,
        checkVehicle,setcheckVehicle,

        // vehicle states
        typeofAlarm,settypeofAlarm,
        tranckingDevice,settranckingDevice,
        imported,setImported,
        driveHand, setdriveHand,
        isModified, setisModified,
        modifiedCaused, setmodifiedCaused,
        leaseCarDate, setleaseCarDate,
        dontHvCar, setdontHvCar,
        usedCarFor, setusedCarFor,
        sdpcBusinessUse,setsdpcBusinessUse,
        businessuseFor,setbusinessuseFor

      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
