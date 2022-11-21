import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components';
import Button from '../../button/Button';
import axios from "axios";
import { RegisterCarWrapper, Title, SVGElement, ToolTipWrapper, MainWrapper, ContentWrapper, RadioButtons } from '../Form.styled';
import { BASE_URL } from '../../../BaseUrl';
import { StoreContext } from '../../../context/Store';

export default function Details() {
    // gettting context value
    const theme = useContext(ThemeContext);
    let {
        loading,
        setLoading,
        vehicleDetails,
        setvehicleDetails,
    } = useContext(StoreContext);

    return (
        <div>
            <Title
                color={theme.blackColor}
            >
                vehicle details
            </Title>

            <ContentWrapper borderColor={theme.liteBlackColor} litewhiteColor={theme.litewhiteColor} whiteColor={theme.whiteColor} blackColor={theme.blackColor} primaryColor={theme.primaryColor} secondaryColor={theme.secondaryColor}>
                <div className='content-left'>
                    We’ve found your vehicle
                </div>
                <div className='content-right'>
                    <div className='has_bg'>
                        <p>
                            2012 VOLKSWAGEN SHARAN SEL BLUEMOTION TECH TDI (170)

                            KM12AKK

                            1968cc Diesel, 5DR Estate, Automatic
                        </p>
                    </div>
                </div>
            </ContentWrapper>

            <ContentWrapper borderColor={theme.liteBlackColor} whiteColor={theme.whiteColor} blackColor={theme.blackColor} secondaryColor={theme.secondaryColor}>
                <div className='content-left'>
                    What type of alarm and/or immobiliser does the car have?
                </div>
                <div className='content-right'>
                    <select className='selectClass'>
                        <option value="" disabled="">Please select...</option>
                        <option value="99991">Factory Fitted Thatcham Approved Alarm/Immobiliser</option>
                        <option value="99992">Factory Fitted Thatcham Approved Alarm</option><option value="99993">Factory Fitted Non-Thatcham Alarm/Immobiliser</option>
                        <option value="99994">Factory Fitted Non-Thatcham Alarm</option>
                        <option value="#F">Factory Fitted</option>
                        <option value="#N">None</option>
                    </select>
                </div>
            </ContentWrapper>

            <ContentWrapper borderColor={theme.liteBlackColor} primaryColor={theme.primaryColor} whiteColor={theme.whiteColor} blackColor={theme.blackColor} secondaryColor={theme.secondaryColor}>
                <div className='content-left'>
                    Is the car fitted with a tracking device?
                </div>
                <div className='content-right'>
                    <RadioButtons
                        primaryColor={theme.primaryColor}
                        blackColor={theme.blackColor}
                        whiteColor={theme.whiteColor}>
                        <input type="radio" id="radio1" name="radios" value="yes" />
                        <label for="radio1">yes</label>

                        <input type="radio" id="radio2" name="radios" value="no" />
                        <label for="radio2">no</label>
                    </RadioButtons>

                </div>
            </ContentWrapper>

            <ContentWrapper borderColor={theme.liteBlackColor} primaryColor={theme.primaryColor} whiteColor={theme.whiteColor} blackColor={theme.blackColor} secondaryColor={theme.secondaryColor}>
                <div className='content-left'>
                    Is the car left or right hand drive?
                </div>
                <div className='content-right'>
                    <RadioButtons
                        primaryColor={theme.primaryColor}
                        blackColor={theme.blackColor}
                        whiteColor={theme.whiteColor}>
                        <input type="radio" id="radio3" name="radios" value="yes" />
                        <label for="radio3">left hand</label>

                        <input type="radio" id="radio4" name="radios" value="no" />
                        <label for="radio4">right hand</label>
                    </RadioButtons>

                </div>
            </ContentWrapper>

            <ContentWrapper borderColor={theme.liteBlackColor} whiteColor={theme.whiteColor} blackColor={theme.blackColor} secondaryColor={theme.secondaryColor}>
                <div className='content-left'>
                    How many seats are there in the car?
                </div>
                <div className='content-right'>
                    <select className='selectClass'>
                        <option value="" disabled="">Please select...</option>
                        <option value="99991">1</option>
                        <option value="99992">2</option><option value="99993">3</option>
                        <option value="99994">4</option>
                        <option value="#F">5</option>
                        <option value="#N">6</option>
                        <option value="#f">7</option>
                    </select>
                </div>
            </ContentWrapper>

            <ContentWrapper borderColor={theme.liteBlackColor} whiteColor={theme.whiteColor} blackColor={theme.blackColor} secondaryColor={theme.secondaryColor}>
                <div className='content-left'>
                    Do you know the current value of the car?
                </div>
                <div className='content-right'>
                    <input type="text" className='text_input' value='$8810' />
                </div>
                <div>
                    <p>
                        Where possible, we’ve estimated your car’s current market value using an independent provider.
                    </p>
                    <p>
                        If a value isn’t shown or you’d like to amend it, simply enter the current market value in the box.
                    </p>
                </div>
            </ContentWrapper>

            <ContentWrapper borderColor={theme.liteBlackColor} primaryColor={theme.primaryColor} whiteColor={theme.whiteColor} blackColor={theme.blackColor} secondaryColor={theme.secondaryColor}>
                <div className='content-left'>
                    Has the car been modified in any way?
                </div>
                <div className='content-right'>
                    <RadioButtons
                        primaryColor={theme.primaryColor}
                        blackColor={theme.blackColor}
                        whiteColor={theme.whiteColor}>
                        <input type="radio" id="radio5" name="radios" value="yes" />
                        <label for="radio5">yes</label>

                        <input type="radio" id="radio6" name="radios" value="no" />
                        <label for="radio6">no</label>
                    </RadioButtons>

                </div>
            </ContentWrapper>
        </div>
    )
}
