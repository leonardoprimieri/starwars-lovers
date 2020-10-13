import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import { FormContainer, Content } from './styles';
import { Container } from '../../components/MainComponents';

const Login = () => {
  return (
    <Container background="https://cutewallpaper.org/21/star-wars-space-wallpaper-hd/Star-Wars-Star-background-Download-free-wallpapers-for-.jpg">
      <Content>
        <FormContainer>
          <h2>Faça login</h2>
          <form>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Senha" />
            <button type="submit">
              <FiLogIn size={30} />
              <h3>may the force be with you</h3>
            </button>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Login;
