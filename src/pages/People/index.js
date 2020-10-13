import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Container } from '../../pages/Planets/styles';

import './styles.css';

import luke from '../../assets/images/luke.jpg';
import beru from '../../assets/images/beru.png';
import biggs from '../../assets/images/biggs.jpg';
import c3po from '../../assets/images/c3po.jpg';
import darthvader from '../../assets/images/darthvader.jpg';
import leia from '../../assets/images/leia.jpg';
import ObiWan from '../../assets/images/obiwan.jpg';
import owen from '../../assets/images/owen.jpg';
import r2d2 from '../../assets/images/r2d2.jpg';
import r5d4 from '../../assets/images/r5d4.jpg';

import AwesomeSlider from 'react-awesome-slider';

const People = () => {
  const [people, setPeople] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages({
      0: luke,
      1: c3po,
      2: r2d2,
      3: darthvader,
      4: leia,
      5: owen,
      6: beru,
      7: r5d4,
      8: biggs,
      9: ObiWan,
    });
  }, []);
  useEffect(() => {
    const getPeople = async () => {
      const request = await axios('https://swapi.dev/api/people/?page=1');
      setPeople(request.data.results);
      console.log(request.data);
    };
    getPeople();
  }, []);

  return (
    <Container background={images[0]}>
      <AwesomeSlider>
        {people.map((item, key) => (
          <div key={key} data-src={images[key]} className="slider--div">
            <div className="slider--infos">
              <p>{item.name}</p>
              <p>Eye Color: {item.eye_color}</p>
              <p>Height: {item.height}</p>
              <p>Birth Year: {item.birth_year}</p>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </Container>
  );
};

export default People;
