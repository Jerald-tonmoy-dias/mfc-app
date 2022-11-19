import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components';
import Button from '../../button/Button';
import { RegisterCarWrapper, Title, SVGElement, ToolTipWrapper, MainWrapper } from './Vehicle.styled';

export default function Vehicle() {
    const theme = useContext(ThemeContext);
    const [openToolTip, setopenToolTip] = useState(false)

    return (
        <div>
            <Title
                color={theme.whiteColor}
            >vehicle details</Title>
            <MainWrapper>
                <RegisterCarWrapper bg={theme.liteWhiteColor} color={theme.whiteColor}>
                    <button onClick={() => setopenToolTip(true)} className='mobile_trigger'>❔</button>

                    <label htmlFor="">What's your car's registration?</label>
                    <div className='inputWrapper'>
                        <span className='country'>UK</span>
                        <input type="text" placeholder='Enter registration...' />

                        <span class="Mark_icon">
                            ✏
                        </span>
                    </div>
                    <hr style={{ margin: '30px 0' }} />

                    <Button text='Find vehicle' />
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


        </div>
    )
}
