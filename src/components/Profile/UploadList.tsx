import * as Api from 'api';
import DogCard, { DogData } from 'components/Home/DogCard';
import React, { useState } from 'react';
import * as S from 'styles/styled';

interface UploadListProps {
  uploadList: DogData[];
}

function UploadList(props: UploadListProps) {
  const { uploadList } = props;
  const [uploadedList, setUploadedList] = useState([...uploadList]);

  const deleteImage = (id: string, index: number) => {
    Api.image
      .deleteUploadImage(id)
      .then((res) => {
        if (res.status === 204) {
          alert('삭제되었습니다.');
          uploadList.splice(index, 1);

          setUploadedList(uploadedList.filter((data, idx) => idx !== index));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <S.DogCardList>
      {uploadedList?.map((likeDog, index) => {
        return (
          <DogCard
            key={index}
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
}

export default UploadList;
