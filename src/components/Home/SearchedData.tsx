// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// const SearchedData = () => {
//   const storeDogsData = useSelector((state) => state.dogsData);
//   const filterData = storeDogsData.filterData;
//   const [aaa, setAaa] = useState([{ name: '', life_span: '', image: { url: '' } }]);

//   // 필터링된 데이터 세팅
//   useEffect(() => {
//     if (filterData.breeds) {
//       const newInputs = [
//         {
//           name: filterData.breeds[0]?.name,
//           life_span: filterData.breeds[0]?.life_span,
//           image: {
//             url: filterData.url
//           }
//         }
//       ];
//       setAaa(newInputs);
//     }
//   }, [filterData]);

//   console.log(aaa);

//   return <></>;
// };

// export default SearchedData;
