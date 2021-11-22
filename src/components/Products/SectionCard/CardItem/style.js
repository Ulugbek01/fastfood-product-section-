import styled from "styled-components";

export const CardItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  font-family: "SFProDisplay";
  color: #2d3a45;
  padding-left: 18px;
  margin: 8px 36px;

  .product {
    display: flex;
    align-items: center;

    & div:first-child {
      margin-right: 28px;
    }
  }

  :first-child {
    margin-top: 20px;
  }

  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }

  & > div {
    flex: 1;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border: 4px solid #edeff3;
  border-radius: 20px;
  cursor: pointer;

  &:first-child {
    margin-right: 23px;
  }
`;

export const ItemsContainer = styled.div`
  position: relative;
`;
export const NewProductWrapper = styled.div`
  width: 366px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 20px 15px rgba(176, 177, 181, 0.551191);
  padding: 44px 24px 32px;
  position: absolute;
  top: -62px;
  right: 0;
  color: #2d3a45;
  font-family: "SFProDisplay";

  .product-name {
    margin-top: 32px;
  }

  p {
    margin-bottom: 5px;
    font-size: 14px;
    opacity: 0.6;
  }

  .load-img {
    padding: 27px 91px;
    border: 1px dashed #edeff3;
  }
`;

NewProductWrapper.Input = styled.input`
  width: 100%;
  border: 1px solid #edeff3;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 13px 16px;
  outline: none;
  margin-bottom: 16px;

  &::placeholder {
    color: #2d3a45;
  }
`;

NewProductWrapper.Button = styled.button`
  background: #20d472;
  border-radius: 4px;
  padding: 8px 34px;
  cursor: pointer;
  border: none;
  color: #fff;
`;
