import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BASE_URL } from '../BaseUrl';
// creating context api
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    //loading
    const [loading, setLoading] = useState(false);
    // get all vehicle data
    const [vehicleDetails, setvehicleDetails] = useState(null);
    // not found data
    const [notFound, setnotFound] = useState(false);

    // all nav list
    const [navList, setnavList] = useState([
        {
            id: 1,
            name: 'Your vehicle',
            status: false,//pass
            current: false,
        },
        {
            id: 2,
            name: 'Your details',
            status: false,//pass
            current: false,
        },
        {
            id: 3,
            name: 'Your policy',
            status: false,//pass
            current: false,
        },
        {
            id: 4,
            name: 'Your summary',
            status: false,//pass
            current: true,
        },
        {
            id: 5,
            name: 'Your quotes',
            status: false,//pass
            current: false,
        }
    ]);

    // count steps
    const [countSteps, setCountSteps] = useState(0);

    // check value passed
    const [checkVehicle,setcheckVehicle] = useState(false);

    return (
        <StoreContext.Provider value={{
            // states
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
            setcheckVehicle

        }}>
            {children}
        </StoreContext.Provider>
    );
};


export { StoreContext, StoreProvider };