import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Content } from './styles';
import { Container } from '../../components/MainComponents';
import FilmCard from '../../components/FilmCard';

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const request = await axios('https://swapi.dev/api/films/');
      setFilms(request.data.results);
    };
    getFilms();
  }, []);
  return (
    <Container background="https://www.teahub.io/photos/full/58-589240_alphacoders-hq-pictures-star-wars-space-backgrounds.jpg">
      <Content>
        {films.map((item, key) => (
          <FilmCard data={item} index={key} key={key} />
        ))}
      </Content>
    </Container>
  );
};

export default Films;
