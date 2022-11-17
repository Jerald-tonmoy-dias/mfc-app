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
    background-color: #002a6e;
    color: #002a6e;
    &:after {
        content: "a";
        margin-right: -2px;
        position: absolute;
        right: 100%;
        z-index: 1;
        color: #fafafa;
        border: 30px solid transparent;
        border-width: 40px 0 40px 15px;
      }
    &:before {
        content: "b";
        margin-right: -2px;
        position: absolute;
        right: 100%;
        z-index: 1;
        color: #fafafa;
        border: 30px solid transparent;
        border-width: 40px 0 40px 15px;
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
                <List><Anchor>
                    <SpanOne>your vehicle</SpanOne>
                    <SpanTwo>1</SpanTwo>
                </Anchor></List>
                <List><Anchor>
                    <SpanOne>your details</SpanOne>
                    <SpanTwo>2</SpanTwo>
                </Anchor></List>
                <List><Anchor>
                    <SpanOne> your policy</SpanOne>
                    <SpanTwo>3</SpanTwo>
                </Anchor></List>
                <List><Anchor>
                    <SpanOne>your summary</SpanOne>
                    <SpanTwo>4</SpanTwo>
                </Anchor></List>

                <List><Anchor>
                    <SpanOne> your quotes</SpanOne>
                    <SpanTwo>5</SpanTwo>
                </Anchor></List>
            </OrderList>

        </Navbar>

    )
}
