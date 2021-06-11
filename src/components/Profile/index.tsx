import Likes from 'components/Profile/LikeList';
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Title>내 정보 section</Title>
      <button onClick={openModal}>좋아요 목록</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Like List Modal">
        <button onClick={closeModal}>X</button>
        <div>좋아요 목록들</div>
        <Likes />
      </Modal>
      <Link href={'/app/bookmark'}>
        <a>
          <button>즐겨찾기 목록</button>
        </a>
      </Link>
    </>
  );
};
const Title = styled.div`
  color: #6fb3eb;
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default Profile;
