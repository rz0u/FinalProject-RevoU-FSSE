// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
// import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function DropDown({ categoriesData, setDropDown }) {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <div className="pb-1 mt-2 w-[270px] bg-[#fff] absolute z-10 shadow-sm rounded-md">
      {categoriesData &&
        // eslint-disable-next-line react/prop-types
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.normalFlex} border-b border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 hover:font-bold`}
            onClick={() => submitHandle(i)}
          >
            {/* <img
              src={i.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt=""
            /> */}
            <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
          </div>
        ))}
    </div>
  );
}

// DropDown.propTypes = {
//   categoriesData: PropTypes.array.isRequired,
//   setDropDown: PropTypes.func.isRequired,
// };

export default DropDown;
