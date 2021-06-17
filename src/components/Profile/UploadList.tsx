import * as Api from 'api';
import DogCard from 'components/Home/DogCard';
import React from 'react';
import * as S from 'styles/styled';

const UploadList = (props) => {
  const { uploadList } = props;

  const deleteImage = () => {
    Api.deleteUploadImage(uploadList[0].id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {/* <button onClick={() => deleteImage()}>delete</button> */}

      <S.DogCardList>
        {uploadList?.map((likeDog: any) => {
          return (
            <DogCard
              key={likeDog.id}
              dogData={likeDog}
              imageUrl={likeDog.url}
            />
          );
        })}
      </S.DogCardList>
    </>
  );
};

export default UploadList;
