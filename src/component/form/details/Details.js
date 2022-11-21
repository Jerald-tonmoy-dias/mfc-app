import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components';
import Button from '../../button/Button';
import axios from "axios";
import { RegisterCarWrapper, Title, SVGElement, ToolTipWrapper, MainWrapper } from '../Form.styled';
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
                color={theme.whiteColor}
            >
                vehicle details
            </Title>



        </div>
    )
}
