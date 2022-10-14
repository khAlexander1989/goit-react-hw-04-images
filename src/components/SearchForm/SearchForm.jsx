import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

import { Form, FormBtn, FormInput } from './SearchForm.styled';

export function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!query.trim()) {
      return;
    }
    onSubmit(query.trim().toLowerCase());
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormBtn type="submit" aria-label="search form submit button">
        <BsSearch size="70%" />
      </FormBtn>

      <FormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={({ target: { value } }) => setQuery(value)}
        value={query}
      />
    </Form>
  );
}

SearchForm.propTyeps = {
  onSubmit: PropTypes.func.isRequired,
};
