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
  isLoading: false,
  isLoadMoreBtnShown: false,
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
        }));

        this.setState({
          isLoadMoreBtnShown:
            fetchedImages.hits.length >= IMAGE_PER_PAGE ? true : false,
        });
      } catch (err) {
        this.setState({ error: err.message });
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

  toggleLoadMoreBtn() {
    this.setState(({ isLoadMoreBtnShown }) => ({
      isLoadMoreBtnShown: !isLoadMoreBtnShown,
    }));
  }

  render() {
    const { images, isLoading, isLoadMoreBtnShown, error } = this.state;

    // const isBtnShown = images.length >= IMAGE_PER_PAGE;
    // console.log('isBtnShown: ', isBtnShown);
    // console.log('isBtnShown: ', isBtnShown);
    return (
      <Container>
        <Searcbar onSubmit={this.handleSubmit} />
        {error ? (
          <ErrorMessage msg={error} />
        ) : (
          <ImageGallery images={images} />
        )}
        {isLoading && <ImageGallerySkeleton />}
        {isLoadMoreBtnShown ? (
          <LoadMoreButton onClick={this.incrementCurrentPage} />
        ) : (
          <h1>Image is over</h1>
        )}
      </Container>
    );
  }
}
