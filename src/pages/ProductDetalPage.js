import React from "react";
import ProductDetails from "../features/product-list/components/ProductDetails";
import Navbar from "../features/navbar/Navbar";

const ProductDetalPage = () => {
  return (
    <Navbar>
      <ProductDetails />
    </Navbar>
  );
};

export default ProductDetalPage;
