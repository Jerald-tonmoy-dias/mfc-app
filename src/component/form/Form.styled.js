import styled from 'styled-components';

export const Title = styled.h1(props => (`
color: ${props.color};
// margin-top: 30px;
font-size: 30px;
padding: 40px 20px;
line-height: normal;
font-weight: 700;

text-transform: capitalize;
`));

export const MainWrapper = styled.div(props => (`
position: relative;
display:flex;
align-items: flex-start;
margin-top: 30px;
width: 100%;

.mobile_trigger {
    font-size: 21px;
    background: white;
    border: none;
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    display: none;
    transition: .3s;

    .trigger-icon {
      margin-top: 6px;
      display: inline-block;
    }
    @media (max-width: 991px) {
    display: inline-block;
  }
}
&.active {
  .mobile_trigger {
    background: ${props.primaryColor};
    color: ${props.whiteColor};
  }
}

// main wrapper hover Effect
@media (min-width: 992px) {
  flex-wrap: wrap;
  &:hover ${ToolTipWrapper} {
   opacity: 1;
   visible: visible;
 }
}   
@media (max-width: 991px) {
    flex-wrap: wrap;
    &.active ${ToolTipWrapper} {
     display: block;
    }
  }
`));

export const RegisterCarWrapper = styled.div(props => (`
    padding: 30px;
    border-radius: 2px;
    width: 80%;
    font-weight: 700;
    color: ${props.blackColor};
    &:hover {
        background: ${props.liteBlackColor};
    }

    label {
      font-size: 19px;
      margin-bottom: 20px;
      display: inline-block;
    }

    .div_wrapper {
      display: flex;
    }

    .Mark_icon {
      font-size: 35px;
      margin-left: 30px;
      color:${props.primaryColor};
    }
    .inputWrapper {
      max-width: 380px;
      border: 2px solid ${props.primaryColor};
      display:flex;
      align-items:center;
      border-radius: 5px;

    .country {
        font-size: 19px;
        display: inline-block;
        background: #FF6600;
        padding: 15px;
        font-weight: 700;
        color: ${props.whiteColor};
    }
    input {
        font-size: 35px;
        font-weight: 700;
        padding: 8px;
        background: white;
        outline: none;
        border: none;
        color: #FF6600;
        text-transform: uppercase;
        flex: 1;
        width: 100%;

        &::placeholder {
        font-weight: 400;
        font-size: 19px;
        color: #8D8E8F;
        text-transform: lowercase;
        }
    }
  }
`));

export const SVGElement = styled.div(props => (`
    font-size: 20px;
    color: ${props.primaryColor};
   
`));

export const ToolTipWrapper = styled.div(props => (`
    position: absolute;
    top: 0;
    right: -91px;
    z-index: 1;
    margin-left: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 20%;
    display: flex;
    background: ${props.whiteColor};
    box-shadow: rgba(33, 35, 38, 0.1) 0px 0px 10px 2px;
    border: 2px solid ${props.primaryColor};
    border-radius: 5px;
    padding: 10px 20px;
    color: ${props.color};
    font-weight: 700;
    opacity: 0;
    visible: hidden;
    border-radius: 5px;
    text-align: justify;
    text-justify: inter-word;

    h4 {
      margin:0;
      font-weight: 700;
      color: ${props.primaryColor};
    }
    p {
      font-size: 14px;
      font-weight: 400;
    }
    .icon_p_wrapper {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      p {
      margin: 8px 0;
      }
    }

    .hint-icon {
      color: ${props.primaryColor};
      font-size: 17px;
      margin-right: 10px;
      margin-top: 18px;
      margin-bottom: -5px;

    }

    @media (max-width: 991px) {
    display: none;
    position: static;
    width: 80%;
    margin-top: 30px;
    opacity: 1;
    visible: visible;
  }


`));

export const ContentWrapper = styled.div(props => (`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-weight: 700;
    border-bottom: 1px solid ${props.borderColor};
    padding: 40px 20px;
    width: 80%;
    &:hover {
      // background: ${props.secondaryColor};
      background: #00000026;
      border-radius: 5px;
    }
    .content-left {
      color: ${props.blackColor};
      width: 34%;
      @media (max-width: 991px) {
        width: 100%;
        margin-top: 30px;
      }
    }

    .content-right {
     color: ${props.blackColor};
     width: 64%;
     @media (max-width: 991px) {
      width: 100%;
      margin-top: 30px;
    }
    .has_bg {
    background: ${props.whiteColor};
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    padding: 10px 20px;
     border-radius: 8px;
    }

    .car_checkbox_wrapper {
      margin-top: 20px;
      input {
        cursor: pointer;
      }
      label {
        cursor: pointer;
        margin-left: 10px;
      }
    }

    .change_vehicle {
      border: none;
      background: transparent;
      font-size: 17px;
      line-height: 19px;
      text-transform: capitalize;
      text-decoration: underline;
      cursor: pointer;
      color: ${props.primaryColor};
      &:hover {
        text-decoration: none;
      }
    }

    .lg-text {
      font-size: 19px;
      font-weight: 700;
      line-height: 1.8;
    }
    .small-text {
      font-size: 17px;
      font-weight: 400;
      line-height: 1.8;
    }

    .check_box_wrapper {
      margin-top: 20px; 

      input {
        margin-right: 10px;
      }
      label {
        text-transform: capitalize;
      }
    }

    .selectClass {
     max-width: 380px;
    padding-bottom: 0.5px;
    padding-right: 37px;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='17px' height='17px' viewBox='0 0 17 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23072760'%3E %3Ctitle%3Edropdown-icon%3C/title%3E %3Cdefs%3E %3Cpath d='M13.308,13.309 C10.652,15.965 6.348,15.965 3.691,13.309 C2.364,11.982 1.7,10.241 1.7,8.501 C1.7,6.76 2.364,5.021 3.691,3.693 C6.348,1.037 10.652,1.037 13.308,3.693 C14.636,5.021 15.299,6.76 15.299,8.501 C15.299,10.241 14.636,11.982 13.308,13.309 M8.5,0 C3.805,0 0,3.806 0,8.501 C0,13.195 3.805,17.001 8.5,17.001 C13.194,17.001 16.999,13.195 16.999,8.501 C16.999,3.806 13.194,0 8.5,0 M11.182,7.452 L5.817,7.452 C5.65,7.452 5.539,7.59 5.539,7.733 C5.539,7.801 5.564,7.871 5.62,7.928 L8.019,10.326 C8.285,10.592 8.715,10.592 8.981,10.326 L11.379,7.928 C11.435,7.871 11.461,7.801 11.461,7.733 C11.461,7.59 11.35,7.452 11.182,7.452' id='path-1'/%3E %3C/defs%3E %3Cg id='Mobile' stroke='none' stroke-width='1' fill-rule='evenodd'%3E %3Cg id='dropdown-icon'%3E %3Cmask id='mask-2'%3E %3Cuse xlink:href='%23path-1'/%3E %3C/mask%3E %3Cuse id='path-1' xlink:href='%23path-1'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E");
    background-size: 17px 17px;
    background-repeat: no-repeat;
    background-position: center right 10px;
    text-overflow: ellipsis;
    width: 100%;
    height: 56px;
    padding: 0 10px;
    color: ${props.blackColor};
    background-color: ${props.whiteColor};
    font-size: 18px;
    font-weight: semi-bold;
    line-height: 24px;
    border-radius: 3px;
    border: 2px solid ${props.primaryColor};
    box-shadow: none;
    transition: color 0.25s, background-color 0.25s, border 0.25s, box-shadow 0.25s;
    }
    }

.text_input {
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    max-width: 380px;
    text-transform: capitalize;
    font-weight: 700;
    padding: 15px 40px;
    border-radius: 5px;
    outline: none;
    margin-right: 10px;
    border: 1px solid ${props.blackColor};
}

.hint-text-wrapper {
  margin-top: 20px;
  display:flex;
  align-items: center;

  .icon {
    font-size: 60px;
    margin-right: 10px;
  }
  .hint-text {
    font-size: 14px;
  }
}

.text_input_box {
  input {
    display: inline-block;
    text-transform: capitalize;
    max-width: 380px;
    font-weight: 700;
    padding: 15px 40px;
    border-radius: 4px;
    box-shadow: rgba(33,35,38,0.1) 0px 10px 10px -10px;
    margin: 0 10px 10px 0;
  }
}

`));

export const RadioButtons = styled.div(props => (`
 input[type="radio"] {
  display: none;
}

label {
    width: calc(35% - 5px);
    text-align: center;
    display:inline-block;
    background: ${props.whiteColor};
    color: ${props.blackColor};
    text-transform: capitalize;
    max-width:    380px;
    font-weight: 700;
    padding: 15px 40px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    margin: 0 10px 10px 0 ;
}

input[type="radio"]:checked+label {
 background: ${props.primaryColor};
 color: ${props.whiteColor}
}

`));

export const NextPrevWrapper = styled.div(props => (`
  width: 80%;
  display: flex;
  justify-self: end;
  justify-content: flex-end;
  // position: relative;
  // z-index: 1;
  margin: 30px 0;
  .btn {
    font-size: 21px;
    line-height: 27px;
    display: inline-block;
    background: ${props.whiteColor};
    color: ${props.blackColor};
    text-transform: capitalize;
    font-weight: 700;
    padding: 15px 40px;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: rgba(33,35,38,0.1) 0px 10px 10px -10px;
    margin: 0 10px 10px 0;
    border: none;
    &.next {
      margin-left: 20px;
    }
    // float: right;
  }
`));