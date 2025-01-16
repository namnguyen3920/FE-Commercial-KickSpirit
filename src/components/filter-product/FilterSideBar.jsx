import React, { useState } from "react";

const FilterSidebar = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5500]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({ category, priceRange });
  };

  const handlePriceInputChange = (e, type) => {
    const value = Math.max(
      0,
      Math.min(5500, parseInt(e.target.value, 10) || 0)
    ); // Giới hạn giá trị từ 0 đến 5500
    const newRange =
      type === "min" ? [value, priceRange[1]] : [priceRange[0], value];
    setPriceRange(newRange);
    onFilterChange({ category: selectedCategory, priceRange: newRange });
  };

  const handlePriceChange = (e) => {
    const value = Math.max(
      0,
      Math.min(5500, parseInt(e.target.value, 10) || 0)
    );
    setPriceRange([0, value]);
    onFilterChange({ priceRange: [0, value] });
  };

  return (
    <div className="w-64 bg-white p-4 shadow-md">
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4">CATEGORY</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => handleCategoryChange(category)}
                className={`block w-full text-left py-1 ${
                  selectedCategory === category
                    ? "font-bold text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-bold text-lg mb-4">PRICE</h3>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="5500"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
