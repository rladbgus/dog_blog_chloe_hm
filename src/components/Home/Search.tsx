import React from 'react';
import styled from 'styled-components';

function Search() {
  const imageTypes = ['gif', 'jpg,png', 'gif,jpg,png'];
  const breeds = ['불독', '미니핀', '비글'];
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
      <select>
        <option value="">breed</option>
        {breeds.map((data, index) => {
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
