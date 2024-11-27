import React, { ComponentType } from "react";
import { LayoutRouteProps, Navigate, Route, Routes } from "react-router-dom";
import { adminConfig, userConfig, publicConfig } from "./routes/routes";
import NotFound from "./routes/NotFound";
import DefaultLayout from "./components/layouts/DefaultLayout";

// Định nghĩa interface RouteConfig
export interface RouteConfig {
  path: string;
  component: () => JSX.Element;
  layout?: ComponentType<LayoutRouteProps> | React.FC<any>;
  isPrivate?: boolean;
}

function App() {
  const role: string = "user"; // Hoặc lấy từ context/state authentication

  const renderRoute = (route: RouteConfig) => {
    const Layout = route.layout || DefaultLayout;
    const Component = route.component;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.isPrivate ? (
            // Nếu là route private, bạn có thể thêm logic kiểm tra authentication
            role === "admin" || role === "user" ? (
              <Layout>
                <Component />
              </Layout>
            ) : (
              // Redirect hoặc render trang login
              <Navigate to="/login" replace />
            )
          ) : (
            <Layout>
              <Component />
            </Layout>
          )
        }
      />
    );
  };

  return (
    <Routes>
      {/* Public Routes - Accessible by everyone */}
      {publicConfig.map(renderRoute)}

      {/* User Routes - Only for authenticated users */}
      {role === "user" && userConfig.map(renderRoute)}

      {/* Admin Routes - Only for admin users */}
      {role === "admin" && adminConfig.map(renderRoute)}

      {/* Handle 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
