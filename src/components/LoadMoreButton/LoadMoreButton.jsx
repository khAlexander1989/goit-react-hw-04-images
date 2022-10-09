import PropTypes from 'prop-types';
import { Button } from './LoadMoreButton.styled';

export function LoadMoreButton({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      Load More
    </Button>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
