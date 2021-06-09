import React, { useState } from 'react';
import styled from 'styled-components';

function Search() {
  const imageTypes = ['gif', 'jpg,png', 'gif,jpg,png'];
  const [searchValue, setSearchValue] = useState('');

  const onSearchValue = (target) => {
    console.log('🚀 ~ target', target);
    setSearchValue(target);
  };

  return (
    <SearchS>
      <select>
        <option value="">image type</option>
        {imageTypes.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="search breed"
        value={searchValue}
        onChange={(e) => onSearchValue(e.target.value)}
      />
    </SearchS>
  );
}

const SearchS = styled.div``;

export default Search;
