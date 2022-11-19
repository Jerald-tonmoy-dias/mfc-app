import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';
import Button from '../../button/Button';
import { RegisterCarWrapper, Title, SVGElement, ToolTipWrapper, MainWrapper } from './Vehicle.styled';

export default function Vehicle() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <Title
                color={theme.whiteColor}
            >vehicle details</Title>
            <MainWrapper>
                <RegisterCarWrapper bg={theme.liteWhiteColor} color={theme.whiteColor}>
                    <button className='mobile_trigger'>❔</button>
                    <label htmlFor="">What's your car's registration?</label>
                    <div className='inputWrapper'>
                        <span className='country'>UK</span>
                        <input type="text" placeholder='Enter registration...' />

                        <span class="Mark_icon">
                            ✏
                            {/* <svg viewBox="0 0 30 30"><path d="M6.07 27.913l5.2-3.1-4.3-2.9zM19.037 3.698l1.051-1.583L24.42 4.99l-1.051 1.583zM7.569 20.949l10.838-16.33 4.333 2.875-10.839 16.33z"></path></svg> */}
                        </span>
                    </div>
                    <hr style={{ margin: '30px 0' }} />

                    <Button text='Find vehicle' />
                </RegisterCarWrapper>
                <ToolTipWrapper borderColor={theme.whiteColor} bg={theme.liteBlackColor}>
                    <SVGElement>
                        ❔
                        {/* <svg viewBox="0 0 27 27"><circle r="2.688" cx="12.242" cy="23.351"></circle><path d="M9.763 19.8v-3.813s-.388-.606 1.262-2.425l3.758-4.34s1-3-1.574-4.145c0 0-2.184-1.343-5.678.91l-1.893-3.38S9.084.963 12.772 1.223c0 0 4.513-.028 6.405 3.162 0 0 2.185 3.726-1.747 8.058l-2.814 2.816s-.339.303-.339.996l.048 3.552H9.763V19.8z"></path></svg> */}
                    </SVGElement>
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
