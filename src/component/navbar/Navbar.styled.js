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
    flex-basis: 20%;
    position: relative;
    &.active {
        background-color: ${props.secondaryColor};
        color: ${props.secondaryColor};
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
            border-bottom-color: ${props.secondaryColor};
        }
        &:before {
            top: 0;
            border-top-color: ${props.secondaryColor};
        }
        padding-left: 5px;
        background-color: #d6d6d6;
        color: #d6d6d6;
      }
    `
));

export const Anchor = styled.a(props => (`
    padding: 15px 28px 13px 12px;
    font-size: 17.5px;
    line-height: 1.1;
    font-weight: bold;
    width: 100%;
    background-color: #fafafa;
    text-decoration: none !important;
    &.is_current {
        background-color: ${props.secondaryColor};
        color: ${props.secondaryColor};
    }
    &.is_disabled {
        padding-left: 5px;
        background-color: #d6d6d6;
        color: #d6d6d6;
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
                color: #d6d6d6;
                top: 0;
                border-top-color: inherit;
        }
        &:after {
            color: #d6d6d6;
            bottom: 0;
            border-bottom-color: inherit;
        }
    }
    }
    `));

export const SpanOne = styled.span`
    text-transform: capitalize;
    color: #fff;
    opacity: 1;
    `;
export const SpanTwo = styled.span`
    text-transform: capitalize;
    color: #fff;
    opacity: 0;

    `;