// import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterDogData } from 'store/modules/dogsData';
import styled from 'styled-components';

function Search() {
  const dispatch = useDispatch();
  const imageTypes = ['gif', 'jpg', 'png'];
  const [searchBreed, setSearchBreed] = useState('');

  const onSearchBreed = (value) => {
    // breed_ids
    setSearchBreed(value);
    //엔터나 검색버튼 눌렀을시 dispatch
    if (value.key === 'Enter') {
      console.log('검색!!!');
    }
  };

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
        onChange={(e) => onSearchBreed(e.target.value)}
        // onKeyPress={(e) => onSearchBreed(e)}
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
