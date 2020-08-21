import React from 'react';
import Modal from 'react-native-modal';
import Block from './Block';
const ModalBox = ({children, ...props}) => {
  return (
    <Modal {...props}>
      <Block
        backgroundColor="background"
        padding={21}
        justifyCenter
        alignCenter
        borderColor="rgba(0, 0, 0, 0.1)"
        {...props.modalStyle}
        >
        {children}
      </Block>
    </Modal>
  );
};

export default ModalBox;
