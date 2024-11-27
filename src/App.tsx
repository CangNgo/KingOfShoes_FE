import React from "react";
import ProductCard from "./components/commons/ProductCard";

const App = () => {
  return (
    <div className="App">
      <header className="text-center text-2xl font-bold my-6">
        Product Catalog
      </header>
      <ProductCard />
    </div>
  );
};

export default App;


