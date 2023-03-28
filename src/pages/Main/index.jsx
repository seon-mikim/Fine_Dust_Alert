import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getDustInfo, selectStation } from "../../store/slices/dustSlice";

function Main() {
  const dispatch = useDispatch();
  const {
    dustInfo: dust,
    loading,
    selectedStation,
    selectedCity,
  } = useSelector((state) => state.dust);
console.log({dust})
  const [renderData, setRenderData] = useState([]);
  
  useEffect(() => {
    if (!selectedCity) return;
    dispatch(getDustInfo({ sidoName: selectedCity }));
  }, [selectedCity]);

  useEffect(() => {
    if (loading || !dust?.body) return;
    // console.log(
    //   "[useEffect dust] ",
    //   dust.body.items.filter((item) => item.sidoName === selectedCity)
    // );

    dispatch(
      selectStation( selectedStation ?? dust?.body?.items[0].stationName)
    );
  }, [dust]);

  useEffect(() => {
    
      const data = renderData.concat(dust?.body?.items.filter((item) => item.stationName ===selectedStation ))
      setRenderData(data);
    return() =>{
     
      setRenderData(data);
    }
  }, [selectedStation]);

  if (loading) return <>loading</>;
  console.log({ renderData }); 
  return (
    <div>
      {
        <Card
          items={renderData}
        />
      }
    </div>
  );
}

export default Main;
