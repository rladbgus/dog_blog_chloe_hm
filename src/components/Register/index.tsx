import * as Api from 'api/index';
import * as ImagePath from 'common/utils/imagePath';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';

const Register = () => {
  const [selectedFile, setSelectedFile] = useState('');
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const previewImage = selectedImageUrl ? selectedImageUrl : ImagePath.register;

  const onFileSelected = (e) => {
    setSelectedFile(e.target.files[0]);
    setSelectedImageUrl(URL.createObjectURL(e.target.files[0]));

    // if (selectedFile[0].size > 1000000) {
    //   alert('이미지의 최대 크기는 1MB입니다.');
    //   return;
    // }
  };

  const handlePost = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    Api.postImage(formData)
      .then((res) => {
        console.log('🚀 ~ res', res);
        Api.analysisImage(res.data.id); //image_id보내기
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <RegisterLayout>
      <h1>이미지 등록</h1>
      <input
        type="file"
        name="file"
        onChange={(e) => onFileSelected(e)}
        accept="image/*"
        multiple
      />
      <ImageSection>
        <img src={previewImage} alt={selectedFile.name} />
      </ImageSection>
      <S.Button onClick={() => handlePost()} color={them.color.yellowGreen}>
        Submit
      </S.Button>
    </RegisterLayout>
  );
};

const RegisterLayout = styled.div`
  /* text-align: center;
  margin: 170px 320px; */
  font-size: 22px;
`;

const ImageSection = styled.div`
  border: 1px solid gray;
  /* width: 187px; */
`;

export default Register;
