import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  width: calc(70vw);
  height: calc(90vh);
`;

export const ModalImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  border-radius: ${p => p.theme.radii.normal};
  object-fit: cover;
`;
