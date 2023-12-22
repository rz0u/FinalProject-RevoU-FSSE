import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

function ProductDetails({ data }) {
  //   const [count, setCount] = useState(1);
  //   const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=12131323112jjkjkjkda1214");
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                {/* Main Image Product */}
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[70%]"
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    {/* First thumnail product */}
                    <img
                      src={data?.image_Url[0].url}
                      alt=""
                      className="h-[200px] overflow-hidden mr-3 mt-3"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[1].url}
                      alt=""
                      className="h-[200px] overflow-hidden mr-3 mt-3"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.price_detail}`}>Rp {data.price}</h4>
                </div>

                <div className="flex items-center justify-center">
                  <Link to={`/shop/preview/${data?.shop._id}`}>
                    <img
                      src={`${data?.shop?.shop_avatar?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  </Link>
                  <div className="pr-8">
                    <Link to={`/shop/preview/${data?.shop._id}`}>
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {data.shop.name}
                      </h3>
                    </Link>
                    <h5 className="pb-3 text-[15px]">
                      {data.shop.ratings} Ratings
                    </h5>
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    className={`${styles.button_chat} mt-4 rounded !h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Chat{" "}
                      <IoChatboxEllipsesOutline size={20} className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <ProductDetailsInfo
            data={data}
            products={products}
            totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
          /> */}
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetails;
