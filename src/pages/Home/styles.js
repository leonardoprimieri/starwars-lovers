import styled from 'styled-components';

export const CreatorInfo = styled.section`
  width: 100%;
`;

export const Content = styled.section`
  margin: 0 auto;
  width: 80%;

  display: flex;
  align-items: center;
  flex-direction: column;

  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.46);

  color: var(--white-color);

  span {
    color: var(--yellow-color);
  }

  border-radius: 8px;
  padding: 64px 24px;
  min-width: 50%;

  cursor: pointer;
  transition: all 400ms ease;

  @media (max-width: 850px) {
    font-size: 12px;
  }
`;
