import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/Categories.css';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categoryStatus = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <div className="categories-container">
      <p className="categoryStatus">{categoryStatus}</p>
      <button type="button" className="categories-btn" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};

export default Categories;
