import { pmGrade, pmGradeImg } from "../../constants/pm10Grade";
import { Card as StCard } from "./style";

function Card({ items, loading }) {
  if (loading) return <>로딩중 </>;
  if (!items?.length) return <>no item</>;
 
  return (
    <div style={{ minWidth: "300px" }}>
      {items?.map((item, index) => (
        <StCard key={index} grade={item.pm10Grade}>
          <div>
            <span>{item.sidoName}</span> <span>{item.stationName}</span>
          </div>
          <div>
            <div>
              <img src={pmGradeImg[item.pm10Grade]} alt="" />
            </div>
            <div>
              <span>{pmGrade[item.pm10Grade] ?? "알수 없음"}</span>
            </div>
            <div>
              <span>미세먼지 치수</span> <span>{item.pm10Value}</span>
            </div>
            <div>{item.dataTime}</div>
          </div>
        </StCard>
      ))}
    </div>
  );
}

export default Card;
