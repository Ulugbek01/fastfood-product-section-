import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-left: 2px solid #e5e5e5;
  background-color: #fff;
  padding: 16px 0 16px 48px;
  width: 100%;
  .search-container {
    cursor: pointer;
    position: relative;

    .search-item {
      position: absolute;
      top: 15px;
      right: 20px;
    }
  }
`;

export const SearchItem = styled.input`
  width: 300px;
  height: 48px;
  border-radius: 24px;
  background-color: #edeff3;
  border: none;
  outline: none;
  padding-left: 15px;
  font-size: 15px;
`;

export const FilterWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 6px solid #edeff3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
  position: relative;
`;

export const CategoriyBox = styled.div`
  position: absolute;
  top: 50px;
  right: -50px;
  width: 313px;
  height: 227px;
  background-color: #fff;
  box-shadow: 0px 10px 35px rgba(176, 177, 181, 0.432802);
  border-radius: 6px;
  z-index: 4;
  padding: 20px 24px;
  color: #2d3a45;

  .title {
    font-family: "SFProDisplay", sans-serif;
    font-size: 14px;
    letter-spacing: 0.4px;
    opacity: 0.6;
    margin-bottom: 5px;
  }

  #filter {
    width: 100%;
    border: 1px solid #edeff3;
    border-radius: 6px;
    padding: 13px 16px;
    outline: none;
  }

  .filter-type {
    margin-top: 15px;
    font-family: "SFProDisplay", sans-serif;
    color: #2d3a45;

    div {
      display: flex;
      align-items: center;
      margin-top: 10px;

      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 1px solid #edeff3;
        margin-right: 12px;
        border-radius: 2px;
        padding: 2px;
      }
      .active {
        background-color: #fcb600;
        border: 1px solid #fcb600;
      }
    }

    p {
      font-size: 14px;
    }
  }
`;

CategoriyBox.Additional = styled.div`
  width: 27px;
  height: 27px;
  background-color: #fff;
  border-radius: 4px;
  transform: rotate(45deg);
  position: absolute;
  top: 40px;
  z-index: 5;
`;
