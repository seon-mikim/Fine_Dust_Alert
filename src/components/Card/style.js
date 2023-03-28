import styled from "styled-components";
export const Card = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 4px;
  -moz-box-shadow: rgba(153, 153, 153, 0.29) 3px 3px 3px 3px;
  　　-webkit-box-shadow: rgba(153, 153, 153) 3px 3px 3px 3px;
  　　box-shadow: rgba(153, 153, 153, 0.29) 3px 3px 3px 3px;
  padding: 20px 20px;
  margin-top: 15px;
  margin-bottom: 20px;
  box-sizing: border-box;
  line-height: 1.4 !important;
  div {
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    padding-top: 5px;
    color: #3f4555;
    span:first-child {
      font-size: 20px;
      font-weight: 700;
    }
    span:nth-child(2) {
      font-size: 15px;
      font-weight: 400;
      color: #868e96;
    }
  }
  div {
    div:first-child {
      margin: auto;
      width: 65px;
      height: 65px;
      img {
      }
    }
    div:nth-child(2) {
      span {
        font-weight: 600;
        font-size: 15px;
        color: #868e96;
      }
    }

    div:nth-child(3) {
      span:first-child {
        font-weight: 600;
        font-size: 15px;
        color: #495057;
      }
      span:nth-child(2) {
        font-weight: 600;
        font-size: 15px;
        color: #868e96;
      }
    }
  }
`;

export const LoadingCard = styled.div`
  width: 100%;
  border-radius: 4px;
  padding: 20px 20px;
  margin-top: 15px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;
