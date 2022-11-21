import styled from 'styled-components';

export const Title = styled.h1(props => (`
color: ${props.color};
margin-top: 30px;
font-size: 30px;
line-height: normal;
font-weight: 700;

text-transform: capitalize;
`));

export const MainWrapper = styled.div(props => (`
display:flex;
align-items: flex-start;
margin-top: 30px;

.mobile_trigger {
    font-size: 21px;
    background: white;
    border: none;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    display: none;
    transition: .3s;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 991px) {
    display: inline-block;

  }
}

@media (max-width: 991px) {
    flex-wrap: wrap;
  }

    &:hover ${ToolTipWrapper} {
    opacity: 1;
    visible: visible;

}
`));

export const RegisterCarWrapper = styled.div(props => (`
    padding: 30px;
    border-radius: 2px;
    width: 80%;
    color: white;
    &:hover {
        background: #00000026;
    }

  label {
    font-size: 19px;
    margin-bottom: 20px;
    display: inline-block;
  }

  .inputWrapper {
    max-width: 380px;
    border: 3px solid #F3516B;
    display:flex;
   align-items:center;

    .country {
        font-size: 19px;
        display: inline-block;
        background: #FF6600;
        padding: 15px;
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

        &::placeholder {
        font-weight: 400;
        font-size: 19px;
        color: #8D8E8F;
        text-transform: lowercase;
        }
    }

    .Mark_icon {
        color: '#ffffff';
        transform: rotate(118deg);
        font-size: 35px;
        margin-left: 13px;
    }
  }
`));

export const SVGElement = styled.div(props => (`
    display: inline-block;
    vertical-align: top;
    margin-top: 2px;
    margin-right: 2px;
    font-size: 20px;
    width: 27px;
    color: #fff;
    height: 27px;

`));


export const ToolTipWrapper = styled.div(props => (`
    flex-direction: row;
    flex-wrap: wrap;
    width: 20%;
    display: flex;
    background: ${props.bg};
    border: 5px solid ${props.borderColor};
    border-radius: 2px; 
    padding: 10px;
    color: white;
    opacity: 0;
    visible: hidden;
    
    @media (max-width: 991px) {
    width: 80%;
    margin-top: 30px;
    opacity: ${props.open == true ? '1' : '0'};
    visible:  ${props.open == true ? 'visible' : 'hidden'};
     
  }

    .help-text {
            max-width: 80%;
    }
`));

export const ContentWrapper = styled.div(props => (`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 16px 8px;
    border-bottom: 1px solid ${props.borderColor};
    
    padding: 10px 15px;

    &:hover {
      background: ${props.secondaryColor};
      border-radius: 5px;
      
    }
    .content-left {
      color: ${props.blackColor};
      width: 34%;
    }


    .content-right {
    color: ${props.blackColor};
    width: 64%;
    .has_bg {
    background: ${props.whiteColor};
    padding: 10px 20px;
     border-radius: 8px;
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
    max-width: 380px;
    text-transform: capitalize;
    font-weight: 700;
    padding: 15px 40px;
    border-radius: 2px;
    outline: none;
    border: 1px solid ${props.blackColor};
}


`));

export const RadioButtons = styled.div(props => (`
 input[type="radio"] {
  display: none;
}

label {
    display:inline-block;
    background: ${props.whiteColor};
    color: ${props.blackColor};
    text-transform: capitalize;
    font-weight: 700;
    padding: 15px 40px;
    border-radius: 2px;
    cursor: pointer;
    &:nth-child(2) {
      margin-right: 10px;
    }
}

input[type="radio"]:checked+label {
 background: ${props.primaryColor};
 color: ${props.whiteColor}
}

`));