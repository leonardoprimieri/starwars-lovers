import React from 'react';
import { FiX } from 'react-icons/fi';
import { Container } from './styles';

const ModalSpecie = ({ modalData, setIsModalOpen }) => {
  return (
    <Container>
      <div className="modal--header">
        <h2>{modalData.name}</h2>
        <FiX size={50} onClick={() => setIsModalOpen(false)} />
      </div>
      <div className="modal--body">
        <span>Average Height: {modalData.average_height}</span>
        <span>Skin Colors: {modalData.skin_colors}</span>
        <span>Language: {modalData.language}</span>
        <span>Average Lifespan: {modalData.average_lifespan}</span>
      </div>
    </Container>
  );
};

export default ModalSpecie;
