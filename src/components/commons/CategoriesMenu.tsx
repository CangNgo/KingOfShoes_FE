import React from "react";
import { categoryData, Category } from "../../components/data/categoryData"; // Import kiểu Category
import { Link } from "react-router-dom";
import Image from "./Image";

const CategoriesMenu: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Khám phá danh mục giày
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryData.map((category: Category) => (
          <Link
            key={category.id}
            to={category.href}
            className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image
                src={category.image}
                alt={category.name}
                className="w-full h-full"
              />
            </div>
            <span className="mt-3 text-sm sm:text-base font-medium text-gray-700 group-hover:text-blue-600">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesMenu;
