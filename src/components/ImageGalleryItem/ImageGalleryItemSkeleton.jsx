import {
  ImageListItemSkeleton,
  ImageSkeleton,
} from './ImageGalleryItemSkeleton.styled';

export function ImageGalleryItemSkeleton() {
  return (
    <ImageListItemSkeleton>
      <ImageSkeleton />
    </ImageListItemSkeleton>
  );
}
