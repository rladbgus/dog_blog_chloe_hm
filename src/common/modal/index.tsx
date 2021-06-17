import { CloseButton, modalStyles } from 'common/modal/modal.style';
import React, { ReactNode, useState } from 'react';
import Modal from 'react-modal';
import * as S from 'styles/styled';
import them from 'styles/them';

type Props = {
  children: ReactNode;
  buttonName: string;
};

const ModalLayout = (props: Props) => {
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
        <CloseButton onClick={closeModal}>X</CloseButton>
        {children}
      </Modal>
    </>
  );
};

export default ModalLayout;
