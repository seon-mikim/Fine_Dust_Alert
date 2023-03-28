import styled from "styled-components";

export const Select = styled.div`
  
  position: relative;
  width: 125px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #49c181;
    font-size: 20px;
  }
  label {
    font-size: 14px;
    margin-left: 4px;
    text-align: center;
  }
  ul {
    position: absolute;
    list-style: none;
    top: 33px;
    left: 0;
    width: 100%;
    overflow-y: auto;
    
    height: 90px;
    max-height: ${({show}) => ((show) ? "none" : "0")};
    padding: 0;
    border-radius: 8px;
    background-color: #222222;
    color: #fefefe;
    &::-webkit-scrollbar {
    width: 8px;

    border-radius: 10px;
    background-color: white;
    }

  

    &::-webkit-scrollbar-thumb {
      background-color: grey;
      height: 25px;
      border-radius: 10px;
    }
    li{

        font-size: 14px;
        padding: 6px 8px;
        transition: background-color 0.2s ease-in;
        &:hover {
          background-color: #595959;
        }
    }
  }
`;
 