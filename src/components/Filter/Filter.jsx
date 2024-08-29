import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts"
      className="block w-full border border-gray-300 rounded-md shadow-sm p-2 mt-2 mb-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  );
};

export default Filter;
