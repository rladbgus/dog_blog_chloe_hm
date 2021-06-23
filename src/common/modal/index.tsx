import { CloseButtonS, modalStyles } from 'common/modal/modal.style';
import React, { ReactNode, useState } from 'react';
import Modal from 'react-modal';
import * as S from 'styles/styled';
import them from 'styles/them';

interface ModalLayoutProps {
  children: ReactNode;
  buttonName: string;
}

function ModalLayout(props: ModalLayoutProps) {
  const { children, buttonName } = props;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <S.Button color={them.color.yellowGreen} onClick={openModal}>
        {buttonName}
      </S.Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal">
        <CloseButtonS onClick={closeModal}>X</CloseButtonS>
        {children}
      </Modal>
    </>
  );
}

export default ModalLayout;
