import * as Api from 'api';
import * as ImagePath from 'common/imagePath';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';
import { onMessageListener } from '../../../firebase/firebase';

function Register() {
  const [selectedFile, setSelectedFile] = useState<File>({} as File);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [progressBar, setProgressBar] = useState(0);
  const [isProgress, setIsProgress] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });

  const previewImage = selectedImageUrl ? selectedImageUrl : ImagePath.register;

  useEffect(() => {
    const messaging = firebase.messaging();
    onMessageListener(messaging)
      .then((payload) => {
        console.log('🚀 ~ payload', payload);
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body
        });
        console.log('🚀 ~ notification', notification);
      })
      .catch((err) => console.error('failed: ', err));
  }, []);

  // 파일 선택
  const onFileSelected = (e: { target: HTMLInputElement }) => {
    const file: File = (e.target.files as FileList)[0];

    if (selectedFile.size > 1000000) {
      alert('이미지의 최대 크기는 1MB입니다.');
      return;
    }

    setSelectedFile(file);
    setSelectedImageUrl(URL.createObjectURL(file));
  };

  // 파일 등록
  const onFileSubmit = () => {
    setIsProgress(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    //api
    Api.image
      .postImage(formData, progressOptions)
      .then((res) => {
        if (res.status === 201) {
          setProgressBar(100);
          setTimeout(() => {
            alert(notification.body);
            setProgressBar(0);
            setIsProgress(false);
            setSelectedImageUrl('');
          }, 1000);
        }
      })
      .catch((err) => {
        //*에러처리
        console.error(err);
      });
  };

  // 미리보기 이미지 삭제
  const deletePreview = () => {
    setSelectedFile(null);
    setSelectedImageUrl('');
  };

  // 프로그래스바 설정
  const progressOptions = {
    onUploadProgress: (progressEvent: ProgressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor((loaded * 100) / total);

      console.log(`${loaded}kb of ${total}kb | ${percentage}%`);

      if (percentage < 100) {
        setProgressBar(percentage);
      }
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

      {isProgress ? (
        <ProgressBarS>
          <CircularProgressbar
            value={progressBar}
            text={`${progressBar}%`}
            styles={buildStyles({
              textSize: '17px',
              pathTransitionDuration: 1,
              pathColor: `rgba(255, 136, 136, ${progressBar / 100})`,
              textColor: '#f39393'
            })}
          />
        </ProgressBarS>
      ) : (
        <S.Button onClick={() => onFileSubmit()} color={them.color.yellowGreen}>
          Submit
        </S.Button>
      )}
    </RegisterLayoutS>
  );
}

const RegisterLayoutS = styled.div`
  text-align: center;
  margin: 140px 400px;
  font-size: 22px;
  color: #454c53;
  input {
    margin: 35px 0 3px;
  }
`;

const PreviewImageS = styled.div`
  border: 1px solid gray;
  width: 187px;
  margin-bottom: 30px;
`;

const ProgressBarS = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 45px;
`;

export default Register;
