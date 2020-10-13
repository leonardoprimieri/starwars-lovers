import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { Container, Content } from './styles';

const Modal = ({ children, isModalOpen }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Container
        display={isModalOpen}
        animate={{ scale: 1.2 }}
        transition={{ duration: 1 }}
      >
        <Content>{children}</Content>
      </Container>
    </AnimatePresence>
  );
};

export default Modal;
