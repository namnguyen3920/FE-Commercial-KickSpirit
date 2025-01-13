import React from "react";

const FooterGrid = ({ title, items }) => {
  return (
    <div className="my-6">
      {/* Title */}
      <h2 className="text-lg font-bold mb-4 text-center">{title}</h2>

      {/* Grid Layout */}
      <div
        className="flex flex-col flex-grown justify-items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="text-center rounded-lg transition">
            <a href={item.link} className="text-sm hover:underline">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(FooterGrid);
