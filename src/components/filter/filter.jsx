import PropTypes from 'prop-types';
import { FilterContainer, FilterInput, FilterLabel } from './filter.styled';
import { setFilter } from 'redux/filtersSlice/filtersSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const Filter = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('')

const onFilter = event => {
  const { value } = event.currentTarget;
  setValue(value);
  dispatch(setFilter(value));
};

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onFilter}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};
