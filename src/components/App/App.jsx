import { Component } from 'react';

import { IMAGE_PER_PAGE } from 'utils/constants';
import { fetchImages } from 'utils/fetchImagesApi';

import { Searcbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { Container } from './App.styled';
import { ImageGallerySkeleton } from 'components/ImageGallery';
import { ErrorMessage } from 'components/ErrorMessage';

const initState = {
  searchQuery: '',
  currentPage: 1,
  images: [],
  totalImages: 0,
  isLoading: false,
  error: null,
};

export class App extends Component {
  state = { ...initState };

  async componentDidUpdate(_, prevState) {
    const { currentPage, searchQuery } = this.state;
    if (
      searchQuery !== prevState.searchQuery ||
      currentPage !== prevState.currentPage
    ) {
      this.setState({ isLoading: true });

      try {
        const fetchedImages = await fetchImages(searchQuery, currentPage);

        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImages.hits],
          totalImages: fetchedImages.totalHits,
        }));
      } catch (err) {
        if (err.code === 'ERR_NETWORK') {
          this.setState({ error: "Sorry, this page isn't available." });
        } else {
          this.setState({ error: err.message });
        }
      } finally {
        this.setState({ isLoading: false });
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
    const { images, totalImages, isLoading, error } = this.state;
    const isLoadMoreBtnShown = images.length < totalImages;

    return (
      <Container>
        <Searcbar onSubmit={this.handleSubmit} />
        {error ? (
          <ErrorMessage msg={error} />
        ) : (
          <ImageGallery images={images} />
        )}
        {isLoading && <ImageGallerySkeleton />}
        {isLoadMoreBtnShown && (
          <LoadMoreButton onClick={this.incrementCurrentPage} />
        )}
      </Container>
    );
  }
}
