import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';
import { StoreContext } from '../../context/Store';
import { Nav, OrderList, List, Anchor, SpanOne, SpanTwo } from './Navbar.styled';

export default function Navbar() {
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
                {navList && navList.map((navItem, index) => {
                    return (
                        <List
                            active={theme.primaryColor}
                            disable={theme.secondaryColor}
                            color={theme.whiteColor}
                            className={`${navItem.current == true ? 'active' : 'disable'}`}>
                            <Anchor
                                active={theme.primaryColor}
                                disable={theme.secondaryColor}
                                color={theme.whiteColor}
                                className={`${navItem.current == true ? 'is_current' : 'is_disabled'}`}>
                                <SpanOne color={theme.whiteColor}>{navItem.name}</SpanOne>
                                <SpanTwo color={theme.whiteColor}>{index + 1}</SpanTwo>
                            </Anchor>
                        </List>
                    )
                })}
            </OrderList>
        </Nav>

    )
}
