import React, { useEffect, useState } from 'react';

import axios from 'axios';

import SpecieCard from '../../components/SpecieCard';
import { Container, Content } from './styles';
import Modal from '../../components/Modal';
import ModalSpecie from '../../components/ModalSpecie';

const Species = () => {
  const [species, setSpecies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    const getSpecies = async () => {
      const request = await axios('https://swapi.dev/api/species/');
      setSpecies(request.data.results);
    };
    getSpecies();
  }, []);

  const handleModalClick = (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('erSPHM')) {
      setIsModalOpen(false);
    }
  };

  const handleItemClick = (item) => {
    setModalData(item);
    setIsModalOpen(true);
  };

  return (
    <Container
      onClick={handleModalClick}
      background="https://images.wallpapersden.com/image/download/the-mandalorian-baby-yoda-star-wars_68037_1920x1080.jpg"
    >
      <h1>StarWars Species</h1>
      <Content>
        {species.map((item, key) => (
          <SpecieCard
            key={key}
            data={item}
            index={key}
            onClick={handleItemClick}
          />
        ))}
      </Content>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalSpecie modalData={modalData} setIsModalOpen={setIsModalOpen} />
      </Modal>
    </Container>
  );
};

export default Species;
