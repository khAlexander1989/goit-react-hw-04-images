import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export function ImageGallery({ images }) {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImageUrl={webformatURL}
          largeImageURL={largeImageURL}
          imageDescription={tags ? tags : 'uknown image'}
        />
      ))}
    </ImageList>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
