import styled from "styled-components";

export const Container = styled.div(
  (props) =>
    `
margin-top: 25px;
padding: 10px 20px;
border-radius: 10px;
background: ${props.whiteColor};
color: ${props.blackColor};

h4 {
    margin-bottom: 0px;
}
`
);
