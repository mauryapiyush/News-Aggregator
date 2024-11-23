import React from 'react';
import './Categorymenu.css';
import { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';

const CategoryMenu = () => {
  const { category, setCategory } = useContext(NewsContext);

  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  return (
    <div className="category-menu">
      <label htmlFor="category">Select Category:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryMenu;
