import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import { getDustInfo } from '../../store/slices/dustSlice';

function City() {
  const dispatch = useDispatch();
  const [sido, setSido] = useState('서울')
  const { dustInfo: dust } = useSelector((state) => state.dust);
  useEffect(() => {
    dispatch(getDustInfo({ sidoName: sido}))
  },[sido])
  return (
    <div>
      {<Card items ={dust.body?.items}/>}
    </div>
  )
}

export default City