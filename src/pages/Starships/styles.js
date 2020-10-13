import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center center;
  background-repeat: no-repeat;

  height: 100vh;

  box-shadow: inset 0px 0px 0px 4000px rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  .slide--div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
