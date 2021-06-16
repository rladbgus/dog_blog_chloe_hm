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

    if (selectedFile.size > 1000000) {
      alert('이미지의 최대 크기는 1MB입니다.');
      return;
    }
  };

  const handlePost = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    Api.postImage(formData)
      .then((res) => {
        console.log('🚀 ~ res', res);
        // Api.analysisImage(res.data.id); //image_id보내기
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
    // for (let key of formData.keys()) {
    //   console.log('keykeykey', key);
    // }

    // // FormData의 value 확인
    // for (let value of formData.values()) {
    //   console.log('valuevalue', value);
    // }
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
      <SubmitButton onClick={() => handlePost()} color={them.color.yellowGreen}>
        Submit
      </SubmitButton>
    </RegisterLayout>
  );
};

const RegisterLayout = styled.div`
  text-align: center;
  margin: 140px 410px;
  font-size: 22px;
  color: #454c53;
  input {
    margin: 35px 0 3px;
  }
`;

const ImageSection = styled.div`
  border: 1px solid gray;
  width: 187px;
`;

export const SubmitButton = styled(S.Button)`
  margin-top: 30px;
`;

export default Register;
