import styled from "styled-components";

export const SideBarContainer = styled.div`
  width: 300px;
  background-color: #eee;
  padding: 28px 24px 30px 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 60px;
`;

LogoContainer.ImgWrapper = styled.div`
  width: 70px;
  height: 70px;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

LogoContainer.TextWrapper = styled.div`
  color: #2d3a45;
  .title {
    font-size: 16px;
  }

  .discription {
    opacity: 0.5;
    margin-top: 4px;
  }
`;
