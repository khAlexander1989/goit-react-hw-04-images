import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay, StyledModal, ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeDown);
  }

  handleEscapeDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onModalClose();
    }
  };

  handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget.nodeName === target.nodeName) {
      this.props.onModalClose();
    }
  };

  render() {
    const { imageUrl, imageDescription } = this.props;

    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <StyledModal>
          <ModalImage src={imageUrl} alt={imageDescription} />
        </StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
