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
} from "../Form.styled";
import { BASE_URL } from "../../../BaseUrl";
import { StoreContext } from "../../../context/Store";
import NotFoundVehicle from "./NotFoundVehicle";
import { BsFillPencilFill, BsQuestionLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Navbar from "../../navbar/Navbar";
import Honesty from "../../static/Honesty";

export default function CheckVehicle() {
  /******************************************
  * GETTING CONTEXT VALUE
  ******************************************/
  const theme = useContext(ThemeContext);
  let {
    setLoading,
    setvehicleDetails,
    notFound,
    setnotFound,
    setcheckVehicle
  } = useContext(StoreContext);

  /******************************************
  * VARIABLES AND STATES
  ******************************************/
  const [openToolTip, setopenToolTip] = useState(false);
  const [modelNo, setModelNo] = useState(null);

  /******************************************
  * FUNCTIONS
  ******************************************/
  const getVehicleInfoFunction = (e, modelNo) => {
    e.preventDefault();
    setLoading(true);
    const url = BASE_URL + modelNo;
    return axios
      .get(url)
      .then((res) => {
        if (res.data.Response.StatusCode != "KeyInvalid") {
          setvehicleDetails(res.data.Response.DataItems);
          setLoading(false);
          setcheckVehicle(true);
          console.log(res.data.Response);
        } else {
          setnotFound(true);
          setcheckVehicle(false);
        }
      })
      .catch((err) => {
        setnotFound(true);
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar navItem={1} navpassed={false} />
      <Title color={theme.blackColor}>vehicle details</Title>
      {notFound === false ? (
        [
          <form onSubmit={(e) => getVehicleInfoFunction(e, modelNo)}>
            <MainWrapper className={openToolTip == true ? 'active' : ''}>
              <RegisterCarWrapper
                whiteColor={theme.whiteColor}
                primaryColor={theme.primaryColor}
                secondaryColor={theme.secondaryColor}
                liteBlackColor={theme.liteBlackColor}
              >
                <button
                  type="button"
                  onClick={(e) => setopenToolTip(prevOpen => !prevOpen)}
                  className="mobile_trigger"
                >
                  <span className="trigger-icon"> {openToolTip == true ? <IoMdClose /> : <BsQuestionLg />}</span>
                </button>

                <label htmlFor="">What's your car's registration?</label>
                <div className="div_wrapper">
                  <div className="inputWrapper">
                    <span className="country">UK</span>
                    <input
                      type="text"
                      className="NumberPlate"
                      onChange={(e) => setModelNo(e.target.value)}
                      placeholder="Enter registration..."
                    />
                  </div>
                  <span className="Mark_icon">
                    <BsFillPencilFill />
                  </span>
                </div>

                <Button
                  whiteColor={theme.whiteColor}
                  primaryColor={theme.primaryColor}
                  type="submit"
                >
                  Find vehicle
                </Button>
              </RegisterCarWrapper>
              <ToolTipWrapper
                open={openToolTip}
                primaryColor={theme.primaryColor}
                whiteColor={theme.whiteColor}
                blackColor={theme.blackColor}
              >
                <div className="icon_p_wrapper">
                  <BsQuestionLg className="hint-icon" />
                  <p>
                    Entering the registration is the quickest way to get a
                    quote.
                  </p>
                </div>
                <p>
                  If your car is brand new the registration might not be
                  recognised. Don’t worry we can still compare insurance for
                  you, just enter the details manually - it won’t take long.
                </p>
                <p>
                  Unfortunately we can’t provide quotes for vehicles
                  manufactured before 1970, motor homes or commercial vehicles
                  weighing more than 3.5 tonnes.
                </p>
              </ToolTipWrapper>
            </MainWrapper>
          </form>,
        ]
      ) : (
        <NotFoundVehicle />
      )}
      <Honesty />
    </div>
  );
}
