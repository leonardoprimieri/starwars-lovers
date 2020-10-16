import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--white-color);
  font-family: 'Archivo', sans-serif;
  background-image: url('https://i.pinimg.com/originals/0d/54/a1/0d54a1ab67c46715b04fddb94a9d13bb.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 400px rgba(0, 0, 0, 0.9);
  z-index: 99999;

  @media (max-width: 640px) {
    font-size: 14px;
    height: 50%;
  }

  .modal--body {
    display: flex;
    flex-direction: column;
  }

  .modal--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin-bottom: 64px;

    @media (max-width: 640px) {
      width: 100%;
    }

    svg {
      color: var(--red-color);
      cursor: pointer;
      size: 30;
    }
  }
`;
