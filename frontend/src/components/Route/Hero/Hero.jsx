import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import background from "../../../assets/bg1.jpeg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

function Hero() {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-cover bg-center ${styles.normalFlex}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${background})`,
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#fff] font-[600] capitalize`}
        >
          Temukan Produk <br /> UMKM terbaik
        </h1>
        <p className="pt-5 text-[16px] font-[500] text-[#fff]">
          Temukan keunikan produk dari Usaha Mikro, Kecil, dan Menengah yang
          terbaik di Lokalestari. <br /> Dukung UMKM lokal dan nikmati produk
          berkualitas tinggi serta unik yang dihasilkan dengan cinta dan
          dedikasi. <br /> Di Lokalestari, kami menyajikan berbagai pilihan
          produk UMKM yang memenuhi standar kualitas dan ramah lingkungan.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <h1 className="text-[#fff] text-[18px] flex items-center">
              Belanja
              <MdOutlineProductionQuantityLimits className="ml-2" size={20} />
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
