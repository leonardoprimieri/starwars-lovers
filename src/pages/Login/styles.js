import styled from 'styled-components';

export const FormContainer = styled.section`
  color: var(--white-color);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  background-color: var(--white-color);
  border: 2px solid var(--yellow-color);
  border-radius: 8px;

  @media (max-width: 720px) {
    width: 65%;
  }

  h2 {
    color: #000;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 110%;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 32px;
    width: 100%;

    input {
      margin-top: 16px;
      padding: 24px 32px;
      border: 0;
      background: transparent;
      font-size: 18px;
      color: var(--white-color);
      font-weight: bold;
      border-bottom: 1px solid var(--yellow-color);

      ::placeholder {
        color: var(--yellow-color);
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  form button {
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    background: transparent;
    background: var(--yellow-color);

    color: var(--white-color);

    border: 1px solid var(--yellow-color);
    font-size: 18px;
    transition: all ease 400ms;
    border-radius: 4px;

    :hover {
      background: transparent;
      color: #000;
    }

    svg {
      margin-right: 22px;
    }

    @media (max-width: 720px) {
      font-size: 12px;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
