import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center center;
  background-repeat: no-repeat;

  height: 100vh;

  box-shadow: inset 0px 0px 0px 4000px rgba(0, 0, 0, 0.6);

  overflow: hidden;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  h1 {
    z-index: 999;
  }
  display: flex;
  justify-content: center;
  align-items: center;

  .slider--div {
    display: flex;
    justify-content: start;
    align-items: flex-start;

    p {
      color: var(--white-color);
      text-shadow: '2px 2px 8px #000';
      font-size: 22px;
      :first-child {
        color: var(--yellow-color);
        font-weight: bold;
        font-size: 22px;
        @media (max-width: 720px) {
          font-size: 12px;
        }
      }
      @media (max-width: 920px) {
        font-size: 8px;
      }
    }
  }
`;
