import * as Api from 'api/index';
import * as ImagePath from 'common/utils/imagePath';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';

const Register = () => {
  const [selectedFile, setSelectedFile] = useState('');
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [progressBar, setProgressBar] = useState(0);

  const previewImage = selectedImageUrl ? selectedImageUrl : ImagePath.register;
  const router = useRouter();

  // 파일 선택
  const onFileSelected = (e) => {
    if (selectedFile.size > 1000000) {
      alert('이미지의 최대 크기는 1MB입니다.');
      return;
    }
    setSelectedFile(e.target.files[0]);
    setSelectedImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 등록
  const onFileSubmit = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    Api.postImage(formData, progressOptions)
      .then((res) => {
        if (res.status === 201) {
          router.push('/app/profile');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 미리보기 이미지 삭제
  const deletePreview = () => {
    setSelectedFile('');
    setSelectedImageUrl('');
  };

  // 프로그래스바 설정
  const progressOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgressBar(percentage);
    }
  };

  return (
    <RegisterLayoutS>
      <h1>이미지 등록</h1>
      <input
        type="file"
        name="file"
        onChange={(e) => onFileSelected(e)}
        accept="image/*"
        multiple
      />
      <PreviewImageS>
        <img
          src={previewImage}
          alt={selectedFile.name}
          onClick={deletePreview}
        />
      </PreviewImageS>

      <SubmitButtonS
        onClick={() => onFileSubmit()}
        color={them.color.yellowGreen}>
        Submit
      </SubmitButtonS>

      <CircularProgressbar
        value={progressBar}
        text={`${progressBar}%`}
        styles={buildStyles({
          textSize: '17px',
          pathTransitionDuration: 1.5,
          pathColor: `rgba(255, 136, 136, ${progressBar / 100})`,
          textColor: '#f39393'
        })}
      />
    </RegisterLayoutS>
  );
};

const RegisterLayoutS = styled.div`
  text-align: center;
  margin: 140px 410px;
  font-size: 22px;
  color: #454c53;
  input {
    margin: 35px 0 3px;
  }
`;

const PreviewImageS = styled.div`
  border: 1px solid gray;
  width: 187px;
`;

export const SubmitButtonS = styled(S.Button)`
  margin-top: 30px;
`;

export default Register;
