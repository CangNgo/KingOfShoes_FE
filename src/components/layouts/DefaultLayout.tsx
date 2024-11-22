import { LayoutRouteProps, Outlet } from "react-router-dom";
import Footer from "../commons/Footer";
import Header from "../commons/Header";
import { FC } from "react";

const DefaultLayout: FC<LayoutRouteProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="content w-full flex justify-center pt-24  pt-24">
        {/* pt-24 tương ứng với chiều cao của header để tránh bị che khuất */}
        <div className=" max-w-7xl px-4 w-4/5">{children || <Outlet />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;