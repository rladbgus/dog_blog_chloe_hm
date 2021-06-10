import React from 'react';
import styled from 'styled-components';

const BookMarks = (props) => {
  const { bookmarkList } = props;
  console.log('🚀 ~ bookmarkList', bookmarkList);
  return <DogCardS>즐겨찾기 목록</DogCardS>;
};

const DogCardS = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export default BookMarks;
