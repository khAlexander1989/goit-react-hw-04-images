import { Component } from 'react';

import { fetchImages } from 'utils/fetchImagesApi';

import { Box } from 'components/Box';
import { Searcbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { Container } from './App.styled';
import { ImageGallerySkeleton } from 'components/ImageGallery';
import { ErrorMessage } from 'components/ErrorMessage';
import { STATUS } from 'utils/constants';

const initState = {
  searchQuery: '',
  currentPage: 1,
  images: [],
  totalImages: 0,
  error: null,
  status: STATUS.IDLE,
};

export class App extends Component {
  state = { ...initState };

  async componentDidUpdate(_, prevState) {
    const { currentPage, searchQuery } = this.state;
    if (
      searchQuery !== prevState.searchQuery ||
      currentPage !== prevState.currentPage
    ) {
      this.setState({ status: STATUS.PENDING });

      try {
        const fetchedImages = await fetchImages(searchQuery, currentPage);

        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImages.hits],
          totalImages: fetchedImages.totalHits,
        }));

        this.setState({ status: STATUS.RESOLVED });
      } catch (err) {
        this.setState({ status: STATUS.REJECTED });

        if (err.code === 'ERR_NETWORK') {
          this.setState({ error: "Sorry, this page isn't available." });
        } else {
          this.setState({ error: err.message });
        }
      }
    }
  }

  handleSubmit = query => {
    if (this.state.searchQuery === query) {
      return;
    }
    this.setState({
      ...initState,
      searchQuery: query,
    });
  };

  incrementCurrentPage = () =>
    this.setState(({ currentPage }) => ({ currentPage: currentPage + 1 }));

  render() {
    const { images, totalImages, error, status } = this.state;
    const isLoadMoreBtnShown = images.length < totalImages;

    return (
      <Container>
        <Searcbar onSubmit={this.handleSubmit} />
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
        {isLoadMoreBtnShown && (
          <LoadMoreButton onClick={this.incrementCurrentPage} />
        )}
      </Container>
    );
  }
}
