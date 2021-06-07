import React from 'react';
import { useDispatch } from 'react-redux';
import { getDogsData } from 'store/modules/dogsData';
import styled from 'styled-components';

function Sort() {
  const dispatch = useDispatch();

  const handleSort = (type) => {
    let queryData = { order: type };
    dispatch(getDogsData(queryData));
  };

  return (
    <>
      <AscButton onClick={() => handleSort('Asc')}>asc</AscButton>
      <DescButton onClick={() => handleSort('Desc')}>desc</DescButton>
    </>
  );
}

const AscButton = styled.button`
  padding: 6px 12px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #74b9ff;
  :hover {
    background-color: #99c6f5;
  }
`;

const DescButton = styled(AscButton)`
  background-color: #ecc65b;
  :hover {
    background-color: #f5d787;
  }
`;

export default Sort;
