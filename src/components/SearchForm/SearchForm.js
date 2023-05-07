import PropTypes from 'prop-types';
import { Button, Form, Input } from './SearchForm.styled';
import { FaSearch } from 'react-icons/fa';

export const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit} autoComplete="off">
      <Input type="text" name="query" placeholder="Search movies"/>
      <Button type="submit" aria-label="Search"><FaSearch /></Button>
    </Form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
}

