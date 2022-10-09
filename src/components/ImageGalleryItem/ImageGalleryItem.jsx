import { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, ImageListItem } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalShown: false,
  };

  toggleModal = () => {
    this.setState(({ isModalShown }) => ({ isModalShown: !isModalShown }));
  };

  render() {
    const { smallImageUrl, largeImageURL, imageDescription } = this.props;
    const { isModalShown } = this.state;
    return (
      <ImageListItem>
        <Image
          src={smallImageUrl}
          alt={imageDescription}
          onClick={this.toggleModal}
        />
        {isModalShown && (
          <Modal
            imageUrl={largeImageURL}
            imageDescription={imageDescription}
            onModalClose={this.toggleModal}
          />
        )}
      </ImageListItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallImageUrl: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
};
