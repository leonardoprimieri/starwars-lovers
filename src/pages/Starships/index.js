import React, { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import starshipsBanner from '../../assets/images/starshipsBanner.jpg';
import StarshipCard from '../../components/StarshipCard';

import axios from 'axios';

import { Container } from './styles';

const Starships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const request = await axios('https://swapi.dev/api/starships/');
      setStarships(request.data.results);
    };
    getStarships();
  }, []);

  return (
    <Container background={starshipsBanner}>
      <AwesomeSlider>
        {starships.length === 0 ? (
          <div style={{ background: 'transparent' }}>
            <h1
              style={{
                color: 'var(--white-color)',
              }}
            >
              Loading...
            </h1>
          </div>
        ) : (
          starships.map((item, key) => (
            <div style={{ background: 'transparent' }} key={key}>
              <StarshipCard data={item} index={key} />
            </div>
          ))
        )}
      </AwesomeSlider>
    </Container>
  );
};

export default Starships;
