import PropTypes from 'prop-types';

import { SearchBarStyled } from './Searchbar.styled';
import { SearchForm } from 'components/SearchForm';

export function Searcbar({ onSubmit }) {
  return (
    <SearchBarStyled>
      <SearchForm onSubmit={onSubmit} />
    </SearchBarStyled>
  );
}

Searcbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
