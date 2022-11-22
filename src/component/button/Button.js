import styled from 'styled-components';

export default styled.button(props=> (
    `
    background: ${props.primaryColor};
    color: #fff;
    margin-top: 20px;
    font-size: 21px;
    line-height: 27px;
    padding: 14px 32px 15px;
    margin-left: 0px;
    position: relative;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 0 #42bc32, 2px 2px 2px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.35s;
    align-self: flex-start;
`
));


   
