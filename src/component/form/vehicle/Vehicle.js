import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components';
import Button from '../../button/Button';
import axios from "axios";
import { RegisterCarWrapper, Title, SVGElement, ToolTipWrapper, MainWrapper } from '../Form.styled';
import { BASE_URL } from '../../../BaseUrl';
import { StoreContext } from '../../../context/Store';
import NotFoundVehicle from './NotFoundVehicle';

export default function Vehicle() {
    // gettting context value
    const theme = useContext(ThemeContext);
    let {
        loading,
        setLoading,
        vehicleDetails,
        setvehicleDetails,
    } = useContext(StoreContext);

    // local states
    const [openToolTip, setopenToolTip] = useState(false);
    const [modelNo, setModelNo] = useState(null);
    const [notFound, setnotFound] = useState(false);

    // functions
    const getVehicleInfoFunction = (e, modelNo) => {
        e.preventDefault();
        // console.log('show something', e);
        // console.log('show something model no', modelNo);
        setLoading(true);
        const url = BASE_URL + modelNo;
        return axios
            .get(url)
            .then((res) => {
                console.log('response from context value ', res);
                if(res.data != undefined) {
                    setvehicleDetails(res.data);
                    setLoading(false);
                } else {
                    setnotFound(true);
                }
            })
            .catch((err) => {
                setnotFound(true);
                console.log(err)
            }
            )
    };
    return (
        <div>
            <Title
                color={theme.whiteColor}
            >
                vehicle details
            </Title>
            {notFound === false ? [
                   <form onSubmit={(e) => getVehicleInfoFunction(e, modelNo)}>
                   <MainWrapper>
                       <RegisterCarWrapper bg={theme.liteWhiteColor} color={theme.whiteColor}>
                           <button onClick={() => setopenToolTip(true)} className='mobile_trigger'>❔</button>
   
                           <label htmlFor="">What's your car's registration?</label>
                           <div className='inputWrapper'>
                               <span className='country'>UK</span>
                               <input type="text" onChange={(e) => setModelNo(e.target.value)} placeholder='Enter registration...' />
                               <span className="Mark_icon">
                                   ✏
                               </span>
                           </div>
                           <hr style={{ margin: '30px 0' }} />
   
                           <Button type='submit' >
                               Find vehicle
                           </Button>
                       </RegisterCarWrapper>
                       <ToolTipWrapper borderColor={theme.whiteColor} open={openToolTip} bg={theme.liteBlackColor}>
                           <SVGElement>
                               ❔
                           </SVGElement>
                           <button onClick={() => setopenToolTip(false)} className='mobile_trigger'>✘</button>
                           <p className='help-text'>
                               Entering the registration is the quickest way to get a quote.
                           </p>
                           <p>If your car is brand new the registration might not be recognised. Don’t worry we can still compare insurance for you, just enter the details manually - it won’t take long.</p>
                           <p>
                               Unfortunately we can’t provide quotes for vehicles manufactured before 1970, motor homes or commercial vehicles weighing more than 3.5 tonnes.
                           </p>
                       </ToolTipWrapper>
                   </MainWrapper>
               </form>
            ] :
            <NotFoundVehicle />
            }
         

          

        </div>
    )
}
