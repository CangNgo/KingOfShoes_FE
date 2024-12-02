import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Image from '../../components/commons/Image';
import Button from '../../components/commons/Button';

interface ProductDetail {
  id: string;
  img: string;
  name: string;
  price: number;
  color: string[];
  size: number[];
  branch: string;
  quantity: number;
}
interface ProductItem {
  id: string;
  img: string;
  name: string;
  price: number;
  color: string;
  size: number;
  branch: string;
  quantity: number;
}

function ProductDetail() {
  const product: ProductDetail = {
    id: 'hkjđásdfsdsfka',
    img: 'https://tse4.mm.bing.net/th?id=OIP.S5JMx5xm1EZtsIXm9_XfxQHaHa&pid=Api&P=0&h=180',
    price: 50000,
    name: 'giầy nike ',
    color: ['xanh lá', 'xanh dương', 'vàng'],
    size: [43, 42, 41, 40],
    branch: 'adidas',
    quantity: 2,
  };

  const [searchParams] = useSearchParams();
  const [color, setColor] = useState(product.color[0]);
  const [size, setSize] = useState(product.size[0]);

  // Lấy giá trị của tham số 'id'
  const productId = searchParams.get('id') || null;

  // Xử lý khi chọn màu
  const handleChangeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value); // Lấy giá trị từ select
  };

  // Xử lý khi chọn kích thước
  const handleChangeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(Number(e.target.value)); // Lấy giá trị từ select và chuyển về kiểu số
  };

  const handleAddToCart = (id: string | null) => {
    // Lấy danh sách sản phẩm từ localStorage (nếu có)
    const items: ProductItem[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
  
    const existingItemIndex = items.findIndex(
      (existingItem) => 
        existingItem.id === product.id && 
        existingItem.color === color && 
        existingItem.size === size
    );
  
    if (existingItemIndex > -1) {
      // Nếu sản phẩm đã tồn tại, tăng số lượng
      items[existingItemIndex].quantity += 1;
    } else {
      // Nếu chưa tồn tại, thêm mới
      const newItem: ProductItem = {
        id: product.id, 
        name: product.name,
        price: product.price, 
        branch: product.branch, 
        img: product.img,
        quantity: 1,
        color: color, 
        size: size
      };
      items.push(newItem);
    }
  
    // Lưu lại vào localStorage
    localStorage.setItem('cartItems', JSON.stringify(items));
  
    alert('Đã thêm sản phẩm vào giỏ hàng');
  };

  const handleCheckoutNow = () => {
    handleAddToCart(productId);
    // navigate('/checkout');
  };

  return (
    <div className="flex text-lg justify-between">
      <div className="w-1/3 pr-4">
        <div className="w-full h-2/3">
          <Image classes="w-full h-full rounded-lg object-cover" src={product.img} />
        </div>
      </div>
      <div className="w-1/3 pr-4">
        <div className="flex justify-start flex-row">
          <div className="w-3/5 flex text-left">
            <div className="w-1/2 flex flex-col">
              <span>Tên sản phẩm: </span>
              <span>Loại: </span>
              <span>Màu: </span>
              <span>Thương hiệu: </span>
              <span>Kích cỡ: </span>
            </div>
            <div className="w-1/2 flex justify-start flex-col">
              <span>{product.name}</span>
              <span>Giày thể thao</span>
              <span>
                <select
                  name="shoes-color"
                  className="p-0 w-40 border rounded-md focus:outline-none"
                  id="shoes-color"
                  value={color} // Hiển thị màu đã chọn
                  onChange={handleChangeColor}
                >
                  {product.color.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </span>
              <span>{product.branch}</span>
              <span>
                <select
                  name="shoes-size"
                  className="p-0 w-40 border rounded-md focus:outline-none"
                  id="shoes-size"
                  value={size} // Hiển thị size đã chọn
                  onChange={handleChangeSize}
                >
                  {product.size.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
         
          <Button
            className=" bg-red-300 focus:outline-none hover:bg-red-400 w-2/3"
            onClick={handleCheckoutNow}
          >
            Mua ngay
          </Button>
          <Button
            className=" bg-blue-300 focus:outline-none hover:bg-blue-400 w-1/3"
            onClick={() => handleAddToCart(productId)}
          >
            Thêm vào sản phẩm
          </Button>
        </div>
      </div>
      <div className="w-1/3 pr-4 ">
        <Image src={product.img} />
      </div>
    </div>
  );
}

export default ProductDetail;
