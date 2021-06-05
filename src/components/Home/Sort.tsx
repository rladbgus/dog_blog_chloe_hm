import React from 'react';
import { useDispatch } from 'react-redux';
import { getDogsData } from 'store/modules/dogsData';

function Sort() {
  const dispatch = useDispatch();

  const handleSort = (type) => {
    let queryData = { limit: 50, order: type };
    dispatch(getDogsData(queryData));
  };

  return (
    <>
      <button onClick={() => handleSort('Asc')}>asc</button>
      <button onClick={() => handleSort('Desc')}>desc</button>
    </>
  );
}

export default Sort;
