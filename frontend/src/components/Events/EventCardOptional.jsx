import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";

function EventCard({ active }) {
  return (
    <div
      className={`w-full block bg-white shadow-xl border border-gray-100 rounded-lg lg:flex p-10 mb-10 ${
        active ? "unset" : "mb-12"
      }`}
    >
      <div className="w-[50%] lg:-w[50%] m-auto p-5">
        {/* <img src={`${data.images[0]?.url}`} alt="" /> */}
        <img
          src="https://xposeindonesia.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-07-at-11.38.26.jpeg"
          alt="Events"
        />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center p-5">
        {/* <h2 className={`${styles.productTitle}`}>{data.name}</h2>
        <p>{data.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {data.originalPrice}$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {data.discountPrice}$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {data.sold_out} sold
          </span>
        </div>
        <CountDown data={data} />
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div
            className={`${styles.button} text-[#fff] ml-5`}
            onClick={() => addToCartHandler(data)}
          >
            Add to cart
          </div>
        </div> */}
        <h2 className={`${styles.productTitle}`}>INACRAFT</h2>
        <p>
          Dalam kegiatan INACRAFT, terdapat pameran produk-produk buatan tangan
          dan manufaktur Indonesia seperti aneka kerajinan tangan, aneka kain
          batik, busana border, berbagai jenis aksesoris, perhiasan,
          barang-barang dekoratif, peralatan rumah tangga, hingga barang-barang
          yang bisa dijadikan sebagai oleh-oleh khas Indonesia.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              Pendaftaran Gratis!
            </h5>
          </div>
        </div>
        <CountDown />
      </div>
    </div>
  );
}

export default EventCard;
