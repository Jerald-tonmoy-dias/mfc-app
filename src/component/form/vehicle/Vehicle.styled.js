import styled from 'styled-components';

export const Title = styled.h1(props => (`
color: ${props.color};
font-size: 30px;
line-height: normal;
margin: 0;
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
}

@media (max-width: 991px) {
    flex-wrap: wrap;
  }

&:hover ${ToolTipWrapper} {
 @media (max-width: 991px) {
opacity: 1;
  visible: visible;
  }
  opacity: 1;
  visible: visible;

    
}
`));
export const RegisterCarWrapper = styled.div(props => (`
    // background: ${props.bg};
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
        padding: 8px;
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
     width: 100%;
  }

    .help-text {
            max-width: 80%;
    }
`));