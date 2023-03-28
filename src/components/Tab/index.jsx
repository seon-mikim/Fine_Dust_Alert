import React from "react";
import { Tab as StTab, CustomNavLink } from "./style";
import {
  RiRoadMapLine,
  RiRoadMapFill,
  RiMapPin5Line,
  RiStarLine,
  RiMapPin5Fill,
  RiStarFill,
} from "react-icons/ri";
import { useLocation } from "react-router-dom";

function Tab() {
  const location = useLocation();

  return (
    <StTab>
      <CustomNavLink to="">
      {location.pathname === "/" ? <RiMapPin5Fill /> : <RiMapPin5Line />}
        <div>내지역보기</div>
      </CustomNavLink>
      <CustomNavLink to="city">
        {location.pathname === "/city" ? <RiRoadMapFill /> : <RiRoadMapLine />}
        <div>전체시도보기</div>
      </CustomNavLink>
      <CustomNavLink to="favorites">
        {location.pathname === "/favorites" ? <RiStarFill /> : <RiStarLine />}
        <div>즐겨찾기</div>
      </CustomNavLink>
    </StTab>
  );
}

export default Tab;
