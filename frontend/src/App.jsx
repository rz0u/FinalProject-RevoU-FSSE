// import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  EventsPage,
  AboutUsPage,
  ProductDetailsPage,
} from "./routes/Routes.js";
import {
  ShopHomePage,
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
} from "./routes/ShopRoutes.js";
// import SellerProtectedRoute from "./routes/SellerProtectedRoute.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import Store from "./redux/store";

function App() {
  // useEffect(() => {
  //   Store.dispatch();
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignupPage />}></Route>
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        ></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/product/:name" element={<ProductDetailsPage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/about-us" element={<AboutUsPage />}></Route>
        {/* FOR SELLER */}
        <Route path="/dashboard" element={<ShopDashboardPage />}></Route>
        <Route path="/seller-profile" element={<ShopHomePage />}></Route>
        <Route
          path="/dashboard-create-product"
          element={<ShopCreateProduct />}
        ></Route>
        <Route path="/dashboard-products" element={<ShopAllProducts />}></Route>
        <Route path="/dashboard-create-event" element={<ShopCreateEvents />} />
        <Route path="/dashboard-events" element={<ShopAllEvents />} />
        {/* <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        ></Route> */}
        {/* <Route path="/shop/:id" element={<ShopHomePage />}></Route> */}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
