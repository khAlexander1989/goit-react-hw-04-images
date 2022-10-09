import { Component } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

import { Form, FormBtn, FormInput } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ searchQuery: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery.trim().toLowerCase());
    this.resetForm();
  };

  resetForm() {
    this.setState({ searchQuery: '' });
  }

  render() {
    const { searchQuery } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormBtn type="submit" aria-label="search form submit button">
          <BsSearch size="70%" />
        </FormBtn>

        <FormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleInputChange}
          value={searchQuery}
        />
      </Form>
    );
  }
}

SearchForm.propTyeps = {
  onSubmit: PropTypes.func.isRequired,
};
