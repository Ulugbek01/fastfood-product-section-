import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(141, 155, 168, 0.35895);
  height: 36px;
  margin-top: 20px;
  h4 {
    text-transform: uppercase;
    font-size: 14px;
    font-family: "SFProDisplay";
    font-weight: 600;
  }

  span {
    width: 1px;
    height: 22px;
    opacity: 0.3;
    border: 1px solid #8d9ba8;
  }
`;
