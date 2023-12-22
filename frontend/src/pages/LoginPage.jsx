// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Login from "../components/Login/Login";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

function LoginPage() {
  // const navigate = useNavigate();
  // const { isSeller, isLoading } = useSelector((state) => state.seller);

  // useEffect(() => {
  //   if (isSeller === true) {
  //     // navigate("/dashboard");
  //   }
  // }, [isLoading, isSeller]);

  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
