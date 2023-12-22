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
          src="https://wiratech.co.id/wp-content/uploads/2019/11/sial-interfood.jpg"
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
        <h2 className={`${styles.productTitle}`}>SIAL InterFOOD</h2>
        <p>
          SIAL InterFOOD merupakan pameran makanan dan minuman bertaraf
          internasional dan terkemuka di Indonesia. <br />
          Pameran ini juga merupakan platform menarik yang dapat membantu
          perusahaan makanan dan minuman di Indonesia untuk melebarkan sayap ke
          pasar ASEAN yang lebih menjanjikan. Di tahun lalu, tercatat lebih dari
          1500 peserta pameran, lebih dari 85000 pengunjung, serta lebih dari 30
          negara perwakilan yang hadir dalam kegiatan pameran SIAL InterFOOD.
          Lantas, apa saja yang ditampilkan dalam kegiatan pameran ini?
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
