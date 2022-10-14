import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Overlay, StyledModal, ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ imageUrl, imageDescription, onModalClose }) {
  useEffect(() => {
    function handleEscapeDown({ code }) {
      console.log(code);
      if (code === 'Escape') {
        onModalClose();
      }
    }

    window.addEventListener('keydown', handleEscapeDown);

    return () => window.removeEventListener('keydown', handleEscapeDown);
  }, [onModalClose]);

  function handleOverlayClick({ currentTarget, target }) {
    if (currentTarget.nodeName === target.nodeName) {
      onModalClose();
    }
  }

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <StyledModal>
        <ModalImage src={imageUrl} alt={imageDescription} />
      </StyledModal>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
