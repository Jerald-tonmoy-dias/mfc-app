import styled from "styled-components";

export const HeaderOne = styled.header(
    (props) => `
  color: ${props.color};
text-align: center;
  font-size: 30px;
  padding: 40px 20px;
  line-height: normal;
  font-weight: 700;
  
  text-transform: capitalize;
  `
  );