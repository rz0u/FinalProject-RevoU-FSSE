import React, { useState } from "react";
import { server } from "../../server/server";
import styles from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

function ShopInfo({ isOwner }) {
  // const [data, setData] = useState({});
  // const { products } = useSelector((state) => state.products);
  // const [isLoading, setIsLoading] = useState(false);
  // const { id } = useParams();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllProductsShop(id));
  //   setIsLoading(true);
  //   axios
  //     .get(`${server}/shop/get-shop-info/${id}`)
  //     .then((res) => {
  //       setData(res.data.shop);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  // const logoutHandler = async () => {
  //   axios.get(`${server}/shop/logout`, {
  //     withCredentials: true,
  //   });
  //   window.location.reload();
  // };

  return (
    <>
      <div>
        <div className="w-full py-5">
          <div className="w-full flex item-center justify-center">
            <img
              // src={`${data.avatar?.url}`}
              alt=""
              className="w-[150px] h-[150px] object-cover rounded-full"
            />
          </div>
          <h3 className="text-center py-2 text-[20px]"></h3>
          <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center"></p>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Alamat</h5>
          <h4 className="text-[#000000a6]"></h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">No Telepon</h5>
          <h4 className="text-[#000000a6]"></h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Total Produk</h5>
          <h4 className="text-[#000000a6]"></h4>
        </div>
        <div className="p-3">
          <h5 className="font-[600]">Terdaftar sejak</h5>
          <h4 className="text-[#000000b0]"></h4>
        </div>
        {isOwner && (
          <div className="py-3 px-4">
            <div
              className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
            >
              <span className="text-white">Keluar</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShopInfo;
