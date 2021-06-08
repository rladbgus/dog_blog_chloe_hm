import React from 'react';
import styled from 'styled-components';

function Information({ dogData }) {
  return (
    <>
      {dogData && (
        <>
          <div>name: {dogData.name}</div>
          <div>breed : {dogData.breed_group}</div>
          <div>life: {dogData.life_span}</div>
          <div>temperament: {dogData.temperament}</div>
        </>
      )}
    </>
  );
}

export default Information;
