import React, { useEffect, useState } from "react";
import Button from "./Button";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  storeName?: string;
  discount?: string;
}

interface ProductCardProps {
  productId: number; // ID để fetch dữ liệu từ API
  fallbackProduct: Product; // Dữ liệu cứng để fallback khi API thất bại
}

const ProductCard: React.FC<ProductCardProps> = ({ productId, fallbackProduct }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) throw new Error("Failed to fetch product data");
        const data = await response.json();
        setProduct({
          id: data.id,
          name: data.title,
          price: `$${data.price}`,
          image: data.image,
          storeName: "Store API", // Lấy từ API nếu backend cung cấp
          discount: data.id % 2 === 0 ? "10% OFF" : undefined, // Giả lập khuyến mãi
        });
      } catch (error) {
        console.error("Error fetching product, using fallback data:", error);
        setProduct(fallbackProduct); // Sử dụng dữ liệu cứng
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, fallbackProduct]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Error loading product.</p>;
  }

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col items-center bg-white h-full">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover mb-4 rounded"
      />
      <div className="text-lg font-bold text-gray-900 text-center mb-2">{product.name}</div>
      {product.storeName && (
        <div className="text-sm text-gray-500 mb-2">{product.storeName}</div>
      )}
      {product.discount && (
        <div className="text-sm text-red-600 font-bold mb-4">{product.discount}</div>
      )}
      <div className="text-lg font-bold text-gray-800 mb-4">{product.price}</div>
      <div className="mt-auto flex justify-between gap-2 w-full">
        <Button
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded w-full"
          onClick={() => alert(`Thêm ${product.name} vào giỏ hàng!`)}
        >
          Thêm vào giỏ hàng
        </Button>
        <Button
          className="px-4 py-2 bg-gray-500 text-white hover:bg-gray-600 rounded w-full"
          onClick={() => alert(`Xem chi tiết sản phẩm: ${product.name}`)}
        >
          Xem chi tiết
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
