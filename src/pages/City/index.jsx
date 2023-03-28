import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import { getDustInfo } from '../../store/slices/dustSlice';

function City() {
  const dispatch = useDispatch();
  const { dustInfo: dust } = useSelector((state) => state.dust);
  useEffect(() => {
    dispatch(getDustInfo({ sidoName: '서울'}))
  },['서울'])
  return (
    <div>
      {<Card items ={dust.body?.items}/>}
    </div>
  )
}

export default City