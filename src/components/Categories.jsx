import { React, useState } from "react";

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectHandler = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? "active" : ""} onClick={() => onSelectHandler(null)}>
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={activeItem === index ? "active" : ""}
            onClick={() => onSelectHandler(index)}
            key={`${name}_${index}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
