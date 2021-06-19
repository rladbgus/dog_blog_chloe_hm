import * as Api from 'api';
import DogCard from 'components/Home/DogCard';
import React, { useState } from 'react';
import * as S from 'styles/styled';

const UploadList = (props) => {
  const { uploadList } = props;
  const [temp, setTemp] = useState([...uploadList]);

  const deleteImage = (id, index) => {
    Api.deleteUploadImage(id)
      .then((res) => {
        if (res.status === 204) {
          alert('삭제되었습니다');
          uploadList.splice(index, 1);
          setTemp(temp.filter((data, idx) => idx !== index));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <S.DogCardList>
      {temp?.map((likeDog: any, index: any) => {
        return (
          <DogCard
            key={likeDog.id}
            index={index}
            dogData={likeDog}
            imageUrl={likeDog.url}
            isButton
            onClickButton={deleteImage}
            buttonName="delete"
          />
        );
      })}
    </S.DogCardList>
  );
};

export default UploadList;
