import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const statusData = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categories-container">
      <div>
        {statusData}
      </div>
      <button type="button" className="categories-btn" onClick={handleStatus}>Check status</button>
    </div>
  );
}

export default Categories;
