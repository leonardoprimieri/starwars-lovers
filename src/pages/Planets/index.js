import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import alderaan from '../../assets/images/al.jpg';

import { Container } from './styles';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    const getPlanets = async () => {
      const request = await axios('https://swapi.dev/api/planets/');
      setPlanets(request.data.results);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    setImages({
      0: 'https://images2.alphacoders.com/890/thumb-1920-890075.jpg',
      1: alderaan,
      2: 'https://i.redd.it/ig9ectnjbgsz.jpg',
      3: 'https://external-preview.redd.it/MRHUHDtLtcOJ8OEpx6znVGl2mKUcY0Ng2tc5cGhCB50.jpg?auto=webp&s=9b86a5fe4f97774212a4ccdf5ca0f9c9488d20e4',
      4: 'https://cdn.hipwallpaper.com/i/97/55/30WHxR.jpg',
      5: 'https://cdn.hipwallpaper.com/i/73/88/4kQEC6.jpg',
      6: 'https://www.teahub.io/photos/full/191-1916083_full-hd-p-darth-vader-wallpapers-hd-desktop.jpg',
      7: 'https://cdn.hipwallpaper.com/i/59/91/g9FXMc.jpg',
      8: 'https://cdn.wallpapersafari.com/87/39/syUepM.jpg',
      9: 'https://images3.alphacoders.com/883/thumb-1920-883577.png',
    });
  }, []);

  return (
    <Container background={images[0]}>
      <AwesomeSlider>
        {planets.map((item, key) => (
          <div key={key} data-src={images[key]} className="slider--div">
            <div
              style={{
                position: 'absolute',
                letterSpacing: 5,
                color: 'var(--white-color)',
                textTransform: 'uppercase',
                display: 'flex',
                justifyCcontent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <p>{item.name}</p>
              <p>Climate: {item.climate}</p>
              <p>Diameter: {item.diameter}</p>
              <p>
                Population:
                {item.population === 'unknown' && 'Unknown'}
                {item.population !== 'unknown' &&
                  parseInt(item.population).toLocaleString('pt-BR')}
              </p>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </Container>
  );
};

export default Planets;
