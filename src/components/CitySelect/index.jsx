import { useState,useEffect } from "react";
import { CITY_LIST } from "../../constants/cityList";
import { Select as StSelect } from "./style";
import { getDustInfo, selectCity, selectStation,} from "../../store/slices/dustSlice";
import { useDispatch, useSelector } from "react-redux";

function CitySelect() {
  const [isOption, setIsOption] = useState(false);
  const [value, setValue] = useState("서울");
  const dispatch = useDispatch();
  const {
    dustInfo: dust,
    loading,
    selectedStation,
    selectedCity: cityName,
  } = useSelector((state) => state.dust);

  useEffect(() => {
    console.log({cityName, selectedStation})
    if(!cityName) dispatch(selectCity('서울'))
    dispatch(getDustInfo({ sidoName: cityName}));
  }, [cityName]);
  
  const changeHandler = (e) => {
    dispatch(selectCity(e.target.innerText))
    dispatch(selectStation(''))
    setValue(e.target.innerText);
  };


  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <StSelect onClick={() => setIsOption((prev) => !prev)} show={isOption}>
        <label>{value}</label>
        <ul onClick={changeHandler}>
          {CITY_LIST.map((city, index) => (
            <div key={index}>
              <li>{city}</li>
            </div>
          ))}
        </ul>
      </StSelect>
    </div>
  );
}

export default CitySelect;
