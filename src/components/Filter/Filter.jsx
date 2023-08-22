import { FilterLabel, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ handleFilterByName, filter }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilterByName}
        value={filter}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  handleFilterByName: PropTypes.func.isRequired,
};