import React from 'react';
import categories from '../categories';

export default function CategorySelector({ category, setCategory}) {
  return (
    <div className="category-selector">
      <p>Select Category</p>
      <select value={category}  onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
