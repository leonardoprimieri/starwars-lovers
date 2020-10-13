import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${(props) => props.background});
  background-position: 0 10;
  background-size: cover;
  background-repeat: no-repeat;

  box-shadow: inset 0 0 0 400px rgba(0, 0, 0, 0.6);
  color: var(--white-color);
  cursor: pointer;

  height: 250px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;

  transition: box-shadow 400ms ease;

  :hover {
    box-shadow: none;
  }
`;
