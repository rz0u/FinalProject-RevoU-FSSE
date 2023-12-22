// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { server } from "../../server/server";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email tidak boleh kosong"),
    password: Yup.string().required("Password tidak boleh kosong"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { email, password } = values;

        const response = await axios.post(
          `${server}/api/v1/user/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
        console.log("Response from server:", response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success("Selamat Datang");

        setTimeout(() => {
          navigate("/dashboard");
          window.location.reload(true);
        }, 3000);
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Login gagal. Silakan coba lagi.");
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Masuk Sebagai Penjual
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formik.values.email}
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={formik.values.password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.password}
                  </p>
                )}
              </div>
            </div>
            <div className={`${styles.normalFlex} justify-between`}>
              <div className={`${styles.normalFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Ingat saya
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Lupa password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Masuk
              </button>
            </div>
            <div className={`${styles.normalFlex} w-full`}>
              <h4>Belum punya akun?</h4>
              <Link to="/sign-up" className="text-blue-600 pl-2">
                Daftar di sini
              </Link>
            </div>
            <div className="mt-4">
              <Link to="/" className="text-blue-600 underline">
                Kembali ke Halaman Utama
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
