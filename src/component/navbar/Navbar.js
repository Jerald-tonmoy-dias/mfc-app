import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';
import { Nav, OrderList, List, Anchor, SpanOne, SpanTwo } from './Navbar.styled';

export default function Navbar() {
    const theme = useContext(ThemeContext);
    // set active 
    // set disable 
    // make state on context

    return (
        <Nav>
            <OrderList>
                <List
                    secondaryColor={theme.secondaryColor}
                    grayColor={theme.grayColor}
                    className='active'>
                    <Anchor
                        secondaryColor={theme.secondaryColor}
                        grayColor={theme.grayColor}
                        className='is_current'>
                        <SpanOne>your vehicle</SpanOne>
                        <SpanTwo>1</SpanTwo>
                    </Anchor>
                </List>
                <List
                    secondaryColor={theme.secondaryColor}
                    grayColor={theme.grayColor}
                    className='disable'>
                    <Anchor className="is_disabled"
                        secondaryColor={theme.secondaryColor}
                        grayColor={theme.grayColor}
                    >
                        <SpanOne>your details</SpanOne>
                        <SpanTwo>2</SpanTwo>
                    </Anchor>
                </List>
                <List
                    secondaryColor={theme.secondaryColor}
                    grayColor={theme.grayColor}
                    className='disable'>
                    <Anchor
                        secondaryColor={theme.secondaryColor}
                        grayColor={theme.grayColor}
                        className="is_disabled">
                        <SpanOne> your policy</SpanOne>
                        <SpanTwo>3</SpanTwo>
                    </Anchor>
                </List>
                <List
                    secondaryColor={theme.secondaryColor}
                    grayColor={theme.grayColor}
                    className='disable'>
                    <Anchor
                        secondaryColor={theme.secondaryColor}
                        grayColor={theme.grayColor}
                        className="is_disabled">
                        <SpanOne>your summary</SpanOne>
                        <SpanTwo>4</SpanTwo>
                    </Anchor>
                </List>
                <List
                    secondaryColor={theme.secondaryColor}
                    grayColor={theme.grayColor}
                    className='disable'>
                    <Anchor
                        secondaryColor={theme.secondaryColor}
                        grayColor={theme.grayColor}
                        className="is_disabled">
                        <SpanOne> your quotes</SpanOne>
                        <SpanTwo>5</SpanTwo>
                    </Anchor>
                </List>
            </OrderList>

        </Nav>

    )
}
