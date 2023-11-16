import PropTypes from 'prop-types'
import css from './Filter.module.css'
export const Filter = ({ value, onChange }) => (
    <>
         <label htmlFor="filter" className={css.filter__label}>find contacts by name</label>
  <input
    type="text"
    placeholder="Search contacts"
    value={value}
            onChange={onChange}
      className={css.input}
      id='filter'
  />
    </>
   
);

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}