import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center center;
  background-repeat: no-repeat;

  height: 100%;

  padding: 32px;

  box-shadow: inset 0px 0px 0px 4000px rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  overflow: hidden;

  h1 {
    z-index: 999;
    color: var(--white-color);
    margin-top: 50px;
    font-family: 'Archivo', sans-serif;
  }
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

export const Content = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  overflow-y: auto;
  padding: 72px;
  margin-bottom: 200px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    width: 100%;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 16px;
  }
  ::-webkit-scrollbar {
    border-radius: 16px;
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--yellow-color);
    border-radius: 16px;
  }
`;
