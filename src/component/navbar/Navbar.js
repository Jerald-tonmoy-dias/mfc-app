import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { StoreContext } from "../../context/Store";
import {
  Nav,
  OrderList,
  List,
  Anchor,
  SpanOne,
  SpanTwo,
} from "./Navbar.styled";

export default function Navbar({ navItem, navpassed }) {
  const theme = useContext(ThemeContext);

  let {
    loading,
    setLoading,
    navList,
    setnavList,
    vehicleDetails,
    setvehicleDetails,
  } = useContext(StoreContext);

  return (
    <Nav>
      <OrderList>
        <List
          active={theme.primaryColor}
          disable={theme.secondaryColor}
          color={theme.whiteColor}
          className={`${navItem == 1 ? "active" : "disable"}`}
        >
          <Anchor
            active={theme.primaryColor}
            disable={theme.secondaryColor}
            color={theme.whiteColor}
            className={`${navItem == 1 ? "is_current" : "is_disabled"}`}
          >
            <SpanOne color={theme.whiteColor}>Your vehicle</SpanOne>
            <SpanTwo color={theme.whiteColor}>1</SpanTwo>
          </Anchor>
        </List>
        <List
          active={theme.primaryColor}
          disable={theme.secondaryColor}
          color={theme.whiteColor}
          className={`${navItem == 2 ? "active" : "disable"}`}
        >
          <Anchor
            active={theme.primaryColor}
            disable={theme.secondaryColor}
            color={theme.whiteColor}
            className={`${navItem == 2 ? "is_current" : "is_disabled"}`}
          >
            <SpanOne color={theme.whiteColor}>Your details</SpanOne>
            <SpanTwo color={theme.whiteColor}>2</SpanTwo>
          </Anchor>
        </List>
        <List
          active={theme.primaryColor}
          disable={theme.secondaryColor}
          color={theme.whiteColor}
          className={`${navItem == 3 ? "active" : "disable"}`}
        >
          <Anchor
            active={theme.primaryColor}
            disable={theme.secondaryColor}
            color={theme.whiteColor}
            className={`${navItem == 3 ? "is_current" : "is_disabled"}`}
          >
            <SpanOne color={theme.whiteColor}>Your policy</SpanOne>
            <SpanTwo color={theme.whiteColor}>3</SpanTwo>
          </Anchor>
        </List>
        <List
          active={theme.primaryColor}
          disable={theme.secondaryColor}
          color={theme.whiteColor}
          className={`${navItem == 4 ? "active" : "disable"}`}
        >
          <Anchor
            active={theme.primaryColor}
            disable={theme.secondaryColor}
            color={theme.whiteColor}
            className={`${navItem == 4 ? "is_current" : "is_disabled"}`}
          >
            <SpanOne color={theme.whiteColor}>Your summary</SpanOne>
            <SpanTwo color={theme.whiteColor}>4</SpanTwo>
          </Anchor>
        </List>
        <List
          active={theme.primaryColor}
          disable={theme.secondaryColor}
          color={theme.whiteColor}
          className={`${navItem == 5 ? "active" : "disable"}`}
        >
          <Anchor
            active={theme.primaryColor}
            disable={theme.secondaryColor}
            color={theme.whiteColor}
            className={`${navItem == 5 ? "is_current" : "is_disabled"}`}
          >
            <SpanOne color={theme.whiteColor}>Your quotes</SpanOne>
            <SpanTwo color={theme.whiteColor}>5</SpanTwo>
          </Anchor>
        </List>
      </OrderList>
    </Nav>
  );
}
