import styled from "styled-components";

// styles
export const Nav = styled.nav`
    margin: 16px 0;
    border-radius: 4px;
    overflow: hidden;
    `;

export const OrderList = styled.ol`
    display: flex;
    flex-basis: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    `;

export const List = styled.li(props => (
    `
    display: inline-flex;
    flex-basis: 25%;
    position: relative;
    text-transform: uppercase;
    &.active {
        background-color: ${props.active};
        color: ${props.active};
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
        &:after {
            bottom: 0;
            border-bottom-color: ${props.active};
        }
        &:before {
            top: 0;
            border-top-color: ${props.active};
        }
        padding-left: 5px;
        background-color: ${props.disable};
        color: ${props.disable};
      }
    `
));

export const Anchor = styled.a(props => (`
    padding: 15px 28px 13px 12px;
    font-size: 17.5px;
    line-height: 1.1;
    font-weight: bold;
    width: 100%;
    text-align: center;
    background-color: #fafafa;
    text-decoration: none !important;
    &.is_current {
        background-color: ${props.active};
        color: ${props.active};
    }
    &.is_disabled {
        padding-left: 5px;
        background-color: ${props.disable};
        color: ${props.disable};
        &:after,&:before {
            content: "";
            display: block;
            margin-right: -2px;
            position: absolute;
            right: 100%;
            z-index: 1;
            color: #fafafa;
            border: 30px solid transparent;
            border-width: 40px 0 40px 15px;
        }

        &:before {
                color: ${props.disable};
                top: 0;
                border-top-color: inherit;
        }
        &:after {
            color: ${props.disable};
            bottom: 0;
            border-bottom-color: inherit;
        }
    }
    }
    `));

export const SpanOne = styled.span(props => (
    `
    color: ${props.color};
    opacity: 1;
    @media (max-width: 1023px) {
       display: none;
      }
    `
));
export const SpanTwo = styled.span(props => (
    `
    color: ${props.color};
    opacity: 0;
    @media (max-width: 1023px) {
        opacity: 1;
       }

    `
));