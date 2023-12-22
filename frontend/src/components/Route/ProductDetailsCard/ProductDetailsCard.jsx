import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import styles from "../../../styles/styles";
import axios from "axios";

function ProductDetailsCard({ setOpen, data }) {
  // const [click, setClick] = useState(false);
  // const [select, setSelect] = useState(false);
  // const [products, setProducts] = useState([]);

  // const productId = data.id;
  // const productTitle = data.title;
  // const productDescription = data.description;
  // const productImage = data.img;
  // const productPrice = data.price;
  // const sellerId = data.userId;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8000/api/v1/product/get-all-products-shop/${productId}`
  //       );

  //       if (response.data.success) {
  //         setProducts(response.data.products);
  //       }
  //     } catch (error) {
  //       console.error("Error fetch data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleMessageSubmit = () => {};

  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />

            <div className={`${styles.section} flex flex-col items-center`}>
              <div className="w-[50%]">
                <img
                  src={data.image_Url[0].url}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="flex items-center justify-center">
                  {/* <Link to={`/shop/preview/${data.shop._id}`} className="flex"></Link> */}
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                    <h3 className={`${styles.shop_name}`}>
                      {/* {data.products.name} */}
                      {data.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">5 Ratings</h5>
                  </div>
                </div>
              </div>

              <div className="w-full pt-5 pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {/* {data.products.title} */}
                  {data.title}
                </h1>
                {/* <p>{data.products.description}</p> */}
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h3 className={`${styles.price}`}>
                    {/* Rp {data.products.price} */}
                    Rp {data.price}
                  </h3>
                </div>

                <div
                  className={`${styles.button_chat} bg-[#000] mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Chat <IoChatboxEllipsesOutline size={20} className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetailsCard;
