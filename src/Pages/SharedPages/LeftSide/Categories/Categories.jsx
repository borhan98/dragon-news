import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`./categories.json`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Category</h2>
      <div className="gap-2">
        {categories.map((category) => (
          <span key={category.id}>
            <NavLink
            to={`/category/${category.id}`}
              className={"py-3 inline-block w-full rounded-lg text-center"}
            >
              {category.name}
            </NavLink>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
