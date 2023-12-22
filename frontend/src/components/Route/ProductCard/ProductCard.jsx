import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { AiOutlineEye } from "react-icons/ai";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import axios from "axios";

function ProductCard({ data }) {
  const [open, setOpen] = useState(false);
  const [sellerName, setSellerName] = useState("");

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  // const productId = data.id;
  // const productTitle = data.title;
  // // const productDescription = data.description;
  // const productImage = data.img;
  // const productPrice = data.price;
  // const sellerId = data.userId;

  // Access Seller name by seller id
  // useEffect(() => {
  //   const fetchSellerName = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8000/api/v1/user/find-user/${sellerId}`
  //       );

  //       if (response.data.success) {
  //         setSellerName(response.data.user.shopName);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching seller name:", error);
  //     }
  //   };
  //   fetchSellerName();
  // }, [sellerId]);

  return (
    <>
      <div className="w-full h-[340px] bg-white rounded-lg shadow-lg p-5 relative cursor-pointer hover:shadow-2xl transition duration-500">
        <div className="flex justify-end"></div>
        {/* Image product */}
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt="product"
            className="w-full h-[150px] object-contain"
          />
        </Link>
        {/* <Link to={`/product/${productId}`}>
          <img
            src={`http://localhost:8000/images/${productImage}.jpg`}
            alt="product"
            className="w-full h-[150px] object-contain"
          />
        </Link> */}

        {/* Shop name */}
        <Link to={`/`}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        {/* <Link to={`/`}>
          <h5 className={`${styles.shop_name}`}>{sellerName}</h5>
        </Link> */}

        {/* Product name */}
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-2 font-bold text-lg">
            {data.name.length > 40 ? data.name.slice(0, 30) + "..." : data.name}
          </h4>
          {/* <Link to={`/product/${productId}`}>
          <h4 className="pb-2 font-bold text-lg">
            {productTitle.length > 40
              ? productTitle.slice(0, 30) + "..."
              : productTitle}
          </h4> */}

          {/* Price */}
          <div className="py-2 flex items-center justify-between">
            <div className="flex justify-center">
              <h4 className={`${styles.price}`}>
                {data.price ? `Rp ${data.price}` : null}
              </h4>
              {/* <h4 className={`${styles.price}`}>{`Rp ${productPrice}`}</h4> */}
            </div>
          </div>
        </Link>

        {/* Quick view */}
        <div>
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
