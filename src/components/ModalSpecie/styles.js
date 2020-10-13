import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--white-color);
  font-family: 'Archivo', sans-serif;

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

    svg {
      color: var(--red-color);
      cursor: pointer;
      size: 30;
    }
  }
`;
