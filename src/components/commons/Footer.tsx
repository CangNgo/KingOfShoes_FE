import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        {/* Cột 1: Hỗ Trợ Khách Hàng */}
        <div>
          <h3 className="font-bold text-lg mb-4">Hỗ Trợ Khách Hàng</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500">Trung tâm trợ giúp</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">An toàn mua bán</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Liên hệ hỗ trợ</a>
            </li>
          </ul>
        </div>

        {/* Cột 2: Về Chợ Tốt */}
        <div>
          <h3 className="font-bold text-lg mb-4">Về Chợ Tốt</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500">Giới thiệu</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Quy chế hoạt động sàn</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Giải quyết tranh chấp</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Tuyển dụng</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Truyền thông</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Blog</a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Liên Kết */}
        <div>
          <h3 className="font-bold text-lg mb-4">Liên Kết</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>Facebook</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-red-600 hover:text-red-800"
            >
              <FontAwesomeIcon icon={faYoutube} />
              <span>YouTube</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-700 hover:text-blue-900"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div>
            <img
              src="/path/to/certificate.png" // Thay bằng đường dẫn ảnh chứng nhận
              alt="Chứng nhận"
              className="w-24"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
