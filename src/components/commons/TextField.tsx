import React, { ReactNode } from "react";

interface TextFieldProps {
  name?: string;
  id?: string;
  type?: string;
  label?: string;
  tabIndex?: number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode; // Thay đổi Children thành children và dùng ReactNode
  className?: string;
  value?:string
}

function TextField({
  name, 
  id, 
  type, 
  label, 
  placeholder, 
  onChange, 
  tabIndex, 
  children, // Thêm children vào props
  className,
  value,
}: TextFieldProps) {

  let classes = ` block w-full rounded-md border-0 py-1.5 pl-7 pr-20
             text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
              focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm/6 `
  if(className) {
    classes = ` ${className} ${classes}`
  }

  return (
    <div className="p-2">
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      
      {/* Nếu không có children thì render input, ngược lại render children */}
      {!children ? (
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            tabIndex={tabIndex}
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className={classes}
          />
        </div>
      ) : (
        <div className="relative mt-2 rounded-md shadow-sm">
          {children}
        </div>
      )}
    </div>
  );
}

export default TextField;