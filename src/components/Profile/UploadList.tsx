import * as Api from 'api';
import DogCard from 'components/Home/DogCard';
import { useRouter } from 'next/router';
import React from 'react';
import * as S from 'styles/styled';

const UploadList = (props) => {
  const { uploadList } = props;

  const router = useRouter();

  const deleteImage = (id) => {
    Api.deleteUploadImage(id)
      .then((res) => {
        if (res.status === 204) {
          alert('삭제되었습니다');
          router.push('/app/profile');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <S.DogCardList>
      {uploadList?.map((likeDog: any) => {
        return (
          <DogCard
            key={likeDog.id}
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
