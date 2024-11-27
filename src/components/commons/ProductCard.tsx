import React, { useEffect, useState } from "react";
import ShoesItem from "./ShoesItem";
import Button from "./Button";
import { sampleProducts } from "../data/sampleData";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
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
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching products, falling back to sample data:", error);
        setProducts(sampleProducts); // Sử dụng dữ liệu mẫu nếu API thất bại
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Dữ liệu mẫu được hiển thị khi API chưa tải xong
  const displayedProducts = loading ? sampleProducts : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {displayedProducts.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <ShoesItem
            title={product.title}
            description={product.description}
            image={product.image}
            medium
          />
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-800">{product.price}</span>
            <Button
              primary
              className="px-4 py-2"
              onClick={() => alert(`Added ${product.title} to cart!`)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
