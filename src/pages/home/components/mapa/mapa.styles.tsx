import styled from "styled-components";

export const Title = styled.h2`
  color: #5f7590;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  overflow: hidden;
`;

export const FippMap = styled.iframe.attrs({
  scrolling: "no",
  height: 500,
})`
  width: 100vw;
`;
