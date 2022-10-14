import { useState, useEffect } from 'react';

import { fetchImages } from 'utils/fetchImagesApi';

import { Box } from 'components/Box';
import { Searcbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { Container } from './App.styled';
import { ImageGallerySkeleton } from 'components/ImageGallery';
import { ErrorMessage } from 'components/ErrorMessage';
import { STATUS } from 'utils/constants';

export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (query) {
      setStatus(STATUS.PENDING);
      fetchImages(query, page)
        .then(data => {
          setImages(prevImages => [...prevImages, ...data.hits]);
          setTotalImages(data.totalHits);
          setStatus(STATUS.RESOLVED);
        })
        .catch(err => {
          setStatus(STATUS.REJECTED);
          if (err.code === 'ERR_NETWORK') {
            setError("Sorry, this page isn't available.");
          } else {
            setError(err.message);
          }
        });
    }
  }, [page, query]);

  function resetState() {
    setQuery('');
    setPage(1);
    setImages([]);
    setTotalImages(0);
    setError(null);
    setStatus(STATUS.IDLE);
  }

  function handleSubmit(q) {
    if (query === q) {
      return;
    }
    resetState();
    setQuery(q);
  }

  const renderLoadMoreBtn = images.length < totalImages;

  return (
    <Container>
      <Searcbar onSubmit={handleSubmit} />
      {status === STATUS.IDLE && (
        <Box as="p" ml={2}>
          There is no any image in the gallery.
        </Box>
      )}
      {status === STATUS.REJECTED && <ErrorMessage msg={error} />}
      {(status === STATUS.RESOLVED || status === STATUS.PENDING) && (
        <ImageGallery images={images} />
      )}
      {status === STATUS.PENDING && <ImageGallerySkeleton />}
      {renderLoadMoreBtn && (
        <LoadMoreButton onClick={() => setPage(prevPage => prevPage + 1)} />
      )}
    </Container>
  );
}
