import * as Api from 'api';
import * as I from 'common/interface';
import DogCard from 'components/Home/DogCard';
import React, { useState } from 'react';
import * as S from 'styles/styled';

interface UploadListProps {
  uploadList: I.DogDetailData[];
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
        alert('잠시후 다시 이용 바랍니다 :<');
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
