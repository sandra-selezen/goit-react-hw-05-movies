import PropTypes from 'prop-types';
import { Form } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit} autoComplete="off">
      <input type="text" name="query" placeholder="Search movies"/>
      <button type="submit">Search</button>
    </Form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
}