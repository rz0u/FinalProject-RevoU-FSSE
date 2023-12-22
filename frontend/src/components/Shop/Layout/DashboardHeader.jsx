import React, { useEffect, useState } from "react";
// import { AiOutlineGift } from "react-icons/ai";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
// import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LokalestariLogo from "../../../assets/LOKALESTARI.png";
import { server } from "../../../server/server";
import axios from "axios";

function DashboardHeader() {
  // const { seller } = useSelector((state) => state.seller);

  // const [userData, setUserData] = useState({});
  // const [avatar, setAvatar] = useState("");

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(`${server}/user/getuser`);
  //       const userData = response.data;

  //       console.log(response);

  //       // Set state with user data
  //       setUserData(userData);

  //       // If avatar is a direct URL, set it to state
  //       if (userData.avatar) {
  //         setAvatar(userData.avatar);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       // Handle error fetching user data
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  const { id } = useParams();

  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div className="ml-10">
        <Link to="/dashboard">
          <img
            src={LokalestariLogo}
            alt="Lokalestari Logo"
            style={{ width: "250px", height: "auto" }}
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to={`/seller-profile`}>
            <img
              src={``}
              alt="Seller Icon"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
          <Link to="/login" className="800px:block hidden">
            <MdLogout color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
