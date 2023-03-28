import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStation } from "../../store/slices/dustSlice";

import { Select as StSelect } from "./style";

function StationSelect() {
  const dispatch = useDispatch();
  const {
    dustInfo: dust,
    loading,
    selectedCity,
    selectedStation: stationName,
  } = useSelector((state) => state.dust);
  const [isOption, setIsOption] = useState(false);
  const [selectedStation, setSelectedStation] = useState(
    stationName || dust.body?.items[0].stationName
  );

  useEffect(() => {
    if(!stationName) dispatch(selectStation('중구'))
  }, [stationName]);

  useEffect(() => {
    if (loading || !dust.body?.items) return;
    setSelectedStation(
      dust.body.items.filter((item) => item.sidoName === selectedCity)[0].stationName
    );
  }, [dust.body]);

  const handleOpen = (e) => {
    e.stopPropagation();
    if (!e.target.classList.contains(StSelect.styledComponentId)) return;

    setIsOption((prev) => !prev);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(selectStation(e.target.textContent));
    setSelectedStation(e.target.textContent);
    setIsOption(false);
  };

  console.log("stationSelect: ", { dust, selectedStation });

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <StSelect onClick={handleOpen} show={isOption}>
        <label>{selectedStation}</label>
        <ul onClick={handleClick}>
          {dust.body?.items
            .filter((item) => item.sidoName === selectedCity)
            .map((item) => (
              <li key={item.stationName}>{item.stationName}</li>
            ))}
        </ul>
      </StSelect>
    </div>
  );
}

export default StationSelect;
