import React, { useEffect, useState } from 'react';

import starDestroyer from '../../assets/images/starDestroyer.png';
import cr90 from '../../assets/images/cr90.png';
import xwing from '../../assets/images/xwing.png';
import ywing from '../../assets/images/ywing.png';
import milleniumfalcon from '../../assets/images/milleniumfalcon.png';
import sentinel from '../../assets/images/sentinel.png';
import tieadvanced from '../../assets/images/tieadvanced.png';
import executor from '../../assets/images/executor.png';
import rebel from '../../assets/images/rebel.png';
import deathstar from '../../assets/images/deathstar.png';

import { Container } from './styles';

const StarshipCard = ({ data, index }) => {
  const [images, setImages] = useState({});
  useEffect(() => {
    setImages({
      0: cr90,
      1: starDestroyer,
      2: sentinel,
      3: deathstar,
      4: milleniumfalcon,
      5: ywing,
      6: xwing,
      7: tieadvanced,
      8: executor,
      9: rebel,
    });
  }, []);
  return (
    <Container>
      <div className="img--area">
        <img src={`${images[index]}`} alt={data.name} />
      </div>
      <div className="info--area">
        <h1>{data.name}</h1>
        <span>Value: {data.cost_in_credits} credits</span>
        <span>Length: {data.length}m</span>
        <span>Max Atmosphering Speed: {data.max_atmosphering_speed}km/h</span>
        <span>Passagers: {data.passengers}</span>
      </div>
    </Container>
  );
};

export default StarshipCard;
