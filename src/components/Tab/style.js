import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Tab = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: center;
  color: #ffff;
  gap: 20px;
  width: 100%;
  height: 55px;
  text-align: center;
  background-color: #333333;
  z-index: 1;
  padding-top: 10px;
  line-height: 1.5;
  div {
    div {
      font-size: 10px;
      font-weight: 400;
    }
  }
`;

export const CustomNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &.active {
    .active_icon {
        display: block;
    }
    .non_active_icon {
        display: none;
    }
  }
  .active_icon {
    display: none;
  }
  .non_active_icon {
    display: block;
  }
`;
