import React from 'react';

import bannerMain from '../../assets/images/bannerMain.jpg';
import { CreatorInfo, Content } from './styles';
import { Container } from '../../components/MainComponents';

const Home = () => {
  return (
    <Container background={bannerMain}>
      <CreatorInfo>
        <Content>
          Creator:
          <h2>
            Name: <span>Leonardo Merlo Primieri</span>
          </h2>
          <h2>
            RA: <span>1121748</span>
          </h2>
          <h2>
            E-mail: <span>leo.primieri@gmail.com</span>
          </h2>
        </Content>
      </CreatorInfo>
    </Container>
  );
};

export default Home;
