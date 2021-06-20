// import { useRouter } from 'next/router';
import { imageTypes } from 'common/utils/dummyData';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterDogData } from 'store/modules/dogsData';
import styled from 'styled-components';

function Search() {
  const dispatch = useDispatch();
  const [searchBreed, setSearchBreed] = useState('');

  const onBreedId = (value) => {
    setSearchBreed(value);
  };
  // 품종으로 검색
  const onSearchBreed = (e) => {
    const query = { breed_ids: searchBreed };
    if (e.key === 'Enter') {
      dispatch(filterDogData(query));
      setSearchBreed('');
    }
  };

  // 이미지타입으로 검색
  const onSearchImageType = (value) => {
    const query = { mime_types: value };
    dispatch(filterDogData(query));
  };

  return (
    <SearchS>
      <input
        type="text"
        placeholder="search breed"
        value={searchBreed}
        onChange={(e) => onBreedId(e.target.value)}
        onKeyPress={onSearchBreed}
      />
      <select onChange={(e) => onSearchImageType(e.target.value)}>
        <option value="">image type</option>
        {imageTypes.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
    </SearchS>
  );
}

const SearchS = styled.div`
  margin-top: 20px;
  input,
  select {
    font-size: 15px;
    width: 180px;
    height: 35px;
    border-radius: 3px;
    padding: 0 10px;
    border: 1px solid #c9cdd2;
    color: #454c53;
    margin-right: 10px;
    outline: none;
  }
`;

export default Search;
