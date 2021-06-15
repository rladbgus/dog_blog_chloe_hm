import * as Api from 'api/index';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';

const Register = () => {
  const [selectedFile, setSelectedFile] = useState('');
  const [detailImageUrl, sdetailImageUrl] = useState('');

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files);
    sdetailImageUrl(URL.createObjectURL(e.target.files[0]));

    // if (selectedFile[0].size > 1000000) {
    //   alert('이미지의 최대 크기는 1MB입니다.');
    //   return;
    // }
  };

  const handlePost = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    Api.postImage(formData)
      .then((res) => {
        console.log('🚀 ~ res', res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Title>이미지 등록</Title>
      <input type="file" name="file" onChange={(e) => handleFileInput(e)} />
      <div className="image_area">
        <img src={detailImageUrl} alt={selectedFile.name} />
      </div>
      <S.Button type="button" onClick={() => handlePost()} color={them.color.yellowGreen}>
        Register
      </S.Button>
    </div>
  );
};

const Title = styled.div`
  color: #6fb3eb;
`;

export default Register;
