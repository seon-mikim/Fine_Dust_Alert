import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
// import { DustContext } from '../../contexts/DustContext'
import CitySelect from "../CitySelect";
import StationSelect from "../StationSelect";

import { Header as StHeader } from "./style";
function Menu() {
  const [city, setCity] = useState("전국");
  const location = useLocation();

  const clickHandler = (e) => {
    console.log("click", e.target);
    if (e.target.tagName !== "LI") return;
    setCity(e.target.textContent);
  };

  return (
    <StHeader onClick={clickHandler}>
      {location.pathname !=='/favorites'&&<CitySelect />}
      {location.pathname === '/' && <StationSelect city={city} />}
    </StHeader>
  );
}

export default Menu;
