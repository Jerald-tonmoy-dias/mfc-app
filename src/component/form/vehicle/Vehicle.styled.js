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
margin-top: 30px
`));
export const RegisterCarWrapper = styled.div(props => (`
    // background: ${props.bg};
    padding: 15px 10px;
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
    // justify-content:center;
    span {
           font-size: 19px;
        display: inline-block;
        background: #FF6600;
        padding: 8px;
    }
    input {
           font-size: 19px;
           padding: 8px;
        background: white;
        outline: none;
        border: none;
         color: #8D8E8F;
        flex: 1;
        &::placeholder {
            color: #8D8E8F;
        }
    }
  }


`));

export const SVGElement = styled.div(props => (`
    display: inline-block;
    vertical-align: top;
    margin-top: 2px;
    margin-right: 2px;
    width: 27px;
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


    .help-text {
            max-width: 80%;
    }
`));