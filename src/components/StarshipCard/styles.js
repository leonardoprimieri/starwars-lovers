import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (max-width: 1390px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 600px;
    height: auto;
    margin-right: 120px;

    @media (max-width: 830px) {
      width: 200px;
      margin-right: 0px;
    }
  }

  h1 {
    color: var(--yellow-color);
  }

  span {
    color: var(--white-color);
  }

  .info--area {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
