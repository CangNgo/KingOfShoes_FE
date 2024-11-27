import React from 'react';

interface ReusableNavBarProps {
  items: {
    id: string;
    label: string;
    icon: string;
    href: string;
    badge?: string;
  }[];
}

const ReusableNavBar: React.FC<ReusableNavBarProps> = ({ items }) => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between', // Phân bổ đều các mục
        gap: '16px',
        padding: '16px 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
      }}
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between', // Căn chỉnh đồng đều giữa các thành phần
            width: '96px', // Đảm bảo chiều rộng cố định
            height: '140px', // Đảm bảo chiều cao cố định
            textAlign: 'center',
            textDecoration: 'none',
            color: '#333',
            position: 'relative', // Cần để định vị badge
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ccc',
              position: 'relative', // Để badge nằm trên icon
            }}
          >
            <img
              src={item.icon}
              alt={item.label}
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain',
              }}
            />
            {/* Badge */}
            {item.badge && (
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#ef4444', // Màu nền đỏ
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  padding: '2px 6px',
                  borderRadius: '9999px',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.badge}
              </span>
            )}
          </div>

          {/* Label */}
          <span
            style={{
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '1.4', // Tăng khoảng cách dòng để đều hơn
              wordWrap: 'break-word',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              textAlign: 'center', // Căn giữa văn bản
            }}
          >
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default ReusableNavBar;




