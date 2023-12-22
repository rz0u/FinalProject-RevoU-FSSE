// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import LokalestariLogo from "../../assets/LOKALESTARI.png";
import { useSelector } from "react-redux";

function Header({ activeHeading }) {
  // const { isAuthenticated, user } = useSelector((state) => state.user);
  // const { isSeller } = useSelector((state) => state.seller);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const searchContainerRef = useRef(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      //   allProducts &&
      //   allProducts.filter((product) =>
      //     product.name.toLowerCase().includes(term.toLowerCase())
      //   );
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  const handleOutsideClick = (e) => {
    // Jika klik dilakukan di luar elemen pencarian
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(e.target)
    ) {
      setSearchTerm(""); // Reset nilai pencarian
      setSearchData(null); // Sembunyikan hasil pencarian
    }
  };

  useEffect(() => {
    // Tambahkan event listener pada mount dan hapus saat unmount
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src={LokalestariLogo}
                alt="Lokalestari Logo"
                style={{ width: "250px", height: "auto" }}
              />
            </Link>
          </div>

          {/* Follow us */}
          <div className="flex items-center">
            <h1 className="mr-4 font-semibold">
              Membawa Kebaikan bagi Lingkungan, Menyediakan Pilihan Terbaik
              untuk Hidup Berkelanjutan.
            </h1>
          </div>

          {/* Seller button */}
          <Link to="/login" className="inline-block">
            <div className={`${styles.button}`}>
              <h1 className="text-[#fff] flex items-center font-medium">
                Jual <FaShop className="ml-2" size={20} />
              </h1>
            </div>
          </Link>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#104d65] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          {/* Categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] w-[270px] hidden 1000px:block">
              <IoMenu size={30} className="absolute top-4 left-2" />
              <button
                className={`h-[100%] w-full items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-md`}
              >
                Semua Kategori
              </button>
              <MdKeyboardDoubleArrowDown
                size={20}
                className="absolute right-5 top-5 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>

          {/* Nav items */}
          <div className={`${styles.normalFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          {/* Search Box */}
          <div className="w-[20%] relative" ref={searchContainerRef}>
            <input
              type="text"
              placeholder="Cari Barang..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const Product_name = d.replace(/\s+/g, "-");

                    return (
                      <Link to={`/product/${Product_name}`} key={index}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
