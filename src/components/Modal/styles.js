import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;

  display: ${(props) => (props.display ? 'flex' : 'none')};
`;

export const Content = styled.section`
  width: 50%;
  height: 70%;
  border-radius: 8px;
  padding: 24px;

  border: 2px solid var(--yellow-color);
`;
