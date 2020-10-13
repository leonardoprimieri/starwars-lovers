import React, { useEffect } from 'react';
import { useState } from 'react';

import aNewHope from '../../assets/images/anewhope.jpg';
import theEmpire from '../../assets/images/theEmpire.jpeg';
import returnOfJedi from '../../assets/images/returnOfJedi.jpg';
import thePhantomMenace from '../../assets/images/thePhantomMenace.jpeg';
import attackOfTheClones from '../../assets/images/attackOfTheClones.jpg';
import revengeOfTheSith from '../../assets/images/revengeOfTheSith.jpeg';

import { Container } from './styles';

const FilmCard = ({ data, index }) => {
  const [images, setImages] = useState({});
  useEffect(() => {
    setImages({
      0: aNewHope,
      1: theEmpire,
      2: returnOfJedi,
      3: thePhantomMenace,
      4: attackOfTheClones,
      5: revengeOfTheSith,
    });
  }, []);
  return (
    <Container>
      <img src={images[index]} alt="" />
    </Container>
  );
};

export default FilmCard;
