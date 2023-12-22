import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails";
import { useParams } from "react-router-dom";
import { productData } from "../static/data";

function ProductDetailsPage() {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
    console.log(data);
  }, []);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      <Footer />
    </div>
  );
}

export default ProductDetailsPage;
