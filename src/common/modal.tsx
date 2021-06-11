import { modalStyles } from 'common/modal.style';
import React, { ReactNode, useState } from 'react';
import Modal from 'react-modal';

type Props = {
  children: ReactNode;
};

const ModalLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={openModal}>Like Dog List</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal">
        <button onClick={closeModal}>X</button>
        {children}
      </Modal>
    </>
  );
};

export default ModalLayout;
