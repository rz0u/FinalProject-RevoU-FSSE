// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { server } from "../../server/server";

function Signup() {
  const [visible, setVisible] = useState(false);

  const handleFileInputChange = (e, setFieldValue) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setFieldValue("avatar", reader.result);
        // setFieldValue("avatar", reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nama toko tidak boleh kosong"),
    phoneNumber: Yup.number().required("Nomor telepon tidak boleh kosong"),
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email tidak boleh kosong"),
    address: Yup.string().required("Alamat tidak boleh kosong"),
    zipCode: Yup.string().required("Kode pos tidak boleh kosong"),
    password: Yup.string()
      .required("Password tidak boleh kosong")
      .min(5, "Password minimal harus 5 karakter")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "Password harus mengandung alfabet dan angka"
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      address: "",
      zipCode: "",
      password: "",
      avatar: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { name, phoneNumber, email, address, zipCode, password, avatar } =
          values;

        const response = await axios.post(
          `${server}/api/v1/user/register`,
          {
            shopName: name,
            phoneNumber: phoneNumber.toString(),
            email,
            address,
            zipcode: zipCode.toString(),
            password,
            avatar,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
        console.log("Response from server:", response.data);
        toast.success("Pendaftaran berhasil! Mohon cek Email Anda...");
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error("Pendaftaran gagal. Silakan coba lagi.");
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
          Daftar Sebagai Penjual
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Toko
              </label>
              <div className="mt-1">
                <input
                  type="name"
                  name="name"
                  required
                  value={formik.values.name}
                  // onChange={(e) => setName(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                No Telepon
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formik.values.phoneNumber}
                  // onChange={(e) => setPhoneNumber(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>
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
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Alamat
              </label>
              <div className="mt-1">
                <input
                  type="address"
                  name="address"
                  required
                  value={formik.values.address}
                  // onChange={(e) => setAddress(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    formik.touched.address && formik.errors.address
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.address}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Kode Pos
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="zipCode"
                  required
                  value={formik.values.zipCode}
                  // onChange={(e) => setZipCode(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    formik.touched.zipCode && formik.errors.zipCode
                      ? "border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.zipCode && formik.errors.zipCode && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.zipCode}
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
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              >
                Avatar
              </label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {formik.values.avatar ? (
                    <img
                      src={formik.values.avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Masukkan Gambar</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    // onChange={handleFileInputChange}
                    onChange={(e) =>
                      // formik.setFieldValue("avatar", e.target.files[0]);
                      // handleFileInputChange(e);
                      handleFileInputChange(e, formik.setFieldValue)
                    }
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Daftar
              </button>
            </div>
            <div className={`${styles.normalFlex} w-full`}>
              <h4>Sudah punya akun?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Masuk
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
