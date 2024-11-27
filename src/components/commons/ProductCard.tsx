import React, { useEffect, useState } from "react";
import Button from "./Button";
import { sampleProducts } from "../data/sampleData";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  storeName?: string; // Tên cửa hàng
  discount?: string; // Giảm giá nếu có
}

const ProductCard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const formattedData = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.image,
          price: `$${item.price}`,
          storeName: "Store ABC", // Giá trị giả lập
          discount: item.id % 2 === 0 ? "10% OFF" : undefined, // Giá trị giả lập
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching products, falling back to sample data:", error);
        setProducts(sampleProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const displayedProducts = loading ? sampleProducts : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {displayedProducts.map((product) => (
        <div
        key={product.id}
        className="border p-4 rounded-lg shadow-md flex flex-col items-center bg-white h-full"
      >
        {/* Hình ảnh sản phẩm */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover mb-4 rounded"
        />
      
        {/* Tên sản phẩm */}
        <div className="text-lg font-bold text-gray-900 text-center mb-2">{product.title}</div>
      
        {/* Tên cửa hàng */}
        {product.storeName && (
          <div className="text-sm text-gray-500 mb-2">{product.storeName}</div>
        )}
      
        {/* Giảm giá (nếu có) */}
        {product.discount && (
          <div className="text-sm text-red-600 font-bold mb-4">{product.discount}</div>
        )}
      
        {/* Giá */}
        <div className="text-lg font-bold text-gray-800 mb-4">{product.price}</div>
      
        {/* Nút */}
        <div className="mt-auto flex justify-between gap-2 w-full">
          <Button
            className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded w-full"
            onClick={() => alert(`Added ${product.title} to cart!`)}
          >
            Thêm vào giỏ hàng
          </Button>
          <Button
            className="px-4 py-2 bg-gray-500 text-white hover:bg-gray-600 rounded w-full"
            onClick={() => alert(`Viewing details for ${product.title}`)}
          >
            Xem chi tiết
          </Button>
        </div>
      </div>
      
      ))}
    </div>
  );
};

export default ProductCard;
