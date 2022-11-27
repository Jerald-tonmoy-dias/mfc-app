import React,{useContext} from 'react'
import {HeaderOne} from '../layout/Layout.styled';
import { ThemeContext } from "styled-components";

export default function Header() {
  const theme = useContext(ThemeContext);
  return (
    <HeaderOne color={theme.primaryColor}>
        quotemeeasy
    </HeaderOne>
 
  )
}
