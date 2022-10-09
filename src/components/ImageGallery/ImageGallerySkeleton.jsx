import { ImageListSkeleton } from './ImageGallerySkeleton.styled';
import { ImageGalleryItemSkeleton } from 'components/ImageGalleryItem';
import { IMAGE_PER_PAGE } from 'utils/constants';

export function ImageGallerySkeleton() {
  const items = [];
  for (let i = 0; i < IMAGE_PER_PAGE; i++) {
    items.push(<ImageGalleryItemSkeleton key={i + 1} />);
  }
  return <ImageListSkeleton>{items}</ImageListSkeleton>;
}
