
import React from 'react';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import ProductCard from '../../components/commons/ProductCard';

const products = [
    {
      id: 1,
      name: "Fjallraven - Foldsack No. 1 Backpack",
      price: "$109.95",
      image: "https://via.placeholder.com/150",
      storeName: "Store ABC",
      discount: "10% OFF",
    },
    {
      id: 2,
      name: "Mens Casual Premium Slim Fit T-Shirts",
      price: "$22.3",
      image: "https://via.placeholder.com/150",
      storeName: "Store DEF",
    },
    {
      id: 3,
      name: "Mens Cotton Jacket",
      price: "$55.99",
      image: "https://via.placeholder.com/150",
      storeName: "Store GHI",
      discount: "5% OFF",
    },
    {
      id: 4,
      name: "Solid Gold Petite Micropave",
      price: "$168",
      image: "https://via.placeholder.com/150",
      storeName: "Store XYZ",
    },
  ];

const ProductList: React.FC = () => {
    return (
        <DefaultLayout>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id} // Truyền ID để fetch API
              fallbackProduct={product} // Truyền dữ liệu cứng nếu API thất bại
            />
          ))}
        </div>
        </DefaultLayout>
    );
};

export default ProductList;


