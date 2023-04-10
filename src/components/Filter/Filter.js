import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addValue } from 'redux/filterSlice';

export default function Filter({ onFilterControl }) {
  const dispatch = useDispatch();

  function searchFilter(e) {
    const value = e.target.value.toLowerCase();
    dispatch(addValue(value));
  }

  return (
    <div>
      <Formik initValueFilter={{ filter: '' }}>
        <label>
          Search
          <Field type="text" name="filter" onChange={searchFilter}></Field>
        </label>
      </Formik>
    </div>
  );
}
