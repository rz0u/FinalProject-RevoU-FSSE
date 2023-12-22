import React, { useEffect, useState } from "react";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { productData } from "../../../static/data";
import { server } from "../../../server/server";
import axios from "axios";

function FeaturedProduct() {
  // const [allProducts, setAllProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${server}/api/v1/product/get-all-products`
  //       );

  //       if (response.data.success) {
  //         setAllProducts(response.data.products);
  //       }
  //     } catch (error) {
  //       console.error("Error fetch data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Produk Rekomendasi</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {/* {allProducts &&
            allProducts.length !== 0 &&
            allProducts.map((product, index) => {
              return <ProductCard data={product} key={index} />;
            })} */}
          {productData &&
            productData.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
