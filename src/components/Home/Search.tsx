// import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterDogData } from 'store/modules/dogsData';
import styled from 'styled-components';

function Search() {
  const dispatch = useDispatch();
  const imageTypes = ['gif', 'jpg', 'png'];
  const [searchBreed, setSearchBreed] = useState('');

  const onBreedId = (value) => {
    setSearchBreed(value);
  };
  // 품종으로 검색
  const onSearchBreed = (e) => {
    const query = { breed_ids: searchBreed };
    if (e.key === 'Enter') {
      dispatch(filterDogData(query));
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

const SearchS = styled.div``;

export default Search;
