import React from 'react'
import styled from "styled-components";

export default function Navbar() {
    const Navbar = styled.nav`
    margin: 16px 0;
    border-radius: 4px;
    overflow: hidden;
    `;

    const OrderList = styled.ol`
    display: flex;
    flex-basis: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    `;

    const List = styled.li`
    display: inline-flex;
    flex-basis: 20%;
    position: relative;
    `;

    const Anchor = styled.a`
    padding: 15px 28px 13px 12px;
    font-size: 17.5px;
    line-height: 1.1;
    font-weight: bold;
    width: 100%;
    background-color: #fafafa;
    text-decoration: none !important;
    &.active {
        background-color: #002a6e;
        color: #002a6e;
      }
    &.disable {
        &:after, &:before {
            content: "";
            display: block;
            position: absolute;
            right: 100%;
            border: 30px solid transparent;
            border-width: 40px 0 40px 15px;
            
        }
        padding-left: 5px;
        background-color: #d6d6d6;
        color: #d6d6d6;
      }
    `;

    const SpanOne = styled.span`
    color: #fff;
    opacity: 1;
    `;
    const SpanTwo = styled.span`
    color: #fff;
    opacity: 1;
    `;

    return (

        <Navbar>
            <OrderList>
                <List>
                    <Anchor className='active'>
                        <SpanOne>your vehicle</SpanOne>
                        <SpanTwo>1</SpanTwo>
                    </Anchor>
                </List>
                <List>
                    <Anchor className='disable'>
                        <SpanOne>your details</SpanOne>
                        <SpanTwo>2</SpanTwo>
                    </Anchor>
                </List>
                <List>
                    <Anchor className='disable'>
                        <SpanOne> your policy</SpanOne>
                        <SpanTwo>3</SpanTwo>
                    </Anchor>
                </List>
                <List>
                    <Anchor className='disable'>
                        <SpanOne>your summary</SpanOne>
                        <SpanTwo>4</SpanTwo>
                    </Anchor>
                </List>

                <List>
                    <Anchor className='disable'>
                        <SpanOne> your quotes</SpanOne>
                        <SpanTwo>5</SpanTwo>
                    </Anchor>
                </List>
            </OrderList>

        </Navbar>

    )
}
