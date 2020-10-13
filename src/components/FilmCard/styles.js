import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  color: var(--white-color);
  width: 100%;
  cursor: pointer;
  transition: all ease 400ms;
  :hover {
    transform: translateY(-20px);
  }

  img {
    width: 250px;
    height: 300px;
    object-fit: contain;
  }
`;
