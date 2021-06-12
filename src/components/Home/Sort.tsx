import React from 'react';
import { useDispatch } from 'react-redux';
import { sortedDogsData } from 'store/modules/dogsData';

function Sort() {
  const dispatch = useDispatch();

  const handleSort = (type: string) => {
    let queryData = {
      limit: 50,
      page: 1,
      order: type
    };
    dispatch(sortedDogsData(queryData));
  };

  return (
    <>
      <button onClick={() => handleSort('Asc')}>asc</button>
      <button onClick={() => handleSort('Desc')}>desc</button>
    </>
  );
}

export default Sort;
