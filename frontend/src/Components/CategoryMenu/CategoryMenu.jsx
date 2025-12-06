import React, { useContext } from "react";
import "./CategoryMenu.css";
import { NewsContext } from "../../Context/NewsContext";

const CategoryMenu = () => {
  const { category, setCategory } = useContext(NewsContext);

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className="category-menu">
      <label htmlFor="category">Select:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat.toLowerCase()}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryMenu;
