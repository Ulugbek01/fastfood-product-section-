import styled from "styled-components";

export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  padding-left: 10px;
  :nth-child(2) {
    background-color: #fcb600;
    border-radius: 0px 6px 6px 0px;
  }
`;

NavItemContainer.Icon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  border-radius: 6px;
  margin-right: 9px;
`;

NavItemContainer.Title = styled.p`
  color: #2d3a45;
  font-family: "SFProDisplay", sans-serif;
`;
