import React from 'react';
import { useDispatch } from 'react-redux';
import { sortedDogsData } from 'store/modules/dogsData';
import * as S from 'styles/styled';
import them from 'styles/them';

function Sort() {
  const dispatch = useDispatch();

  const handleSort = (type: string) => {
    let queryData = {
      limit: 50,
      order: type
    };
    dispatch(sortedDogsData(queryData));
  };

  return (
    <>
      <S.Button
        color={them.color.yellowGreen}
        onClick={() => handleSort('Asc')}>
        asc
      </S.Button>
      <S.Button
        color={them.color.yellowGreen}
        onClick={() => handleSort('Desc')}>
        desc
      </S.Button>
    </>
  );
}

export default Sort;
