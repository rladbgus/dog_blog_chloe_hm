import React from 'react';

function Introduction({ introductionData }: any) {
  return (
    <>
      <h1>{introductionData.title}</h1>
      <div>{introductionData.name}</div>
      <div>{introductionData.description}</div>
    </>
  );
}

export default Introduction;
