import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";
import { server } from "../../server/server";
import axios from "axios";
// import { useFormik } from "formik";
// import * as Yup from "yup";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [allCategory, setAllCategory] = useState([]);
  const [images, setImages] = useState([]);
  const token = localStorage.getItem("token");
  // console.log(token);

  // Render all category
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}/category`);

        if (response.data.success) {
          setAllCategory(response.data.categories);
        }
      } catch (error) {
        console.error("Error fetch data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle image
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required("Nama produk tidak boleh kosong"),
  //   description: Yup.string().required("Deskripsi produk tidak boleh kosong"),
  //   category: Yup.string().notOneOf(
  //     ["Pilih kategori produk"],
  //     "Pilih kategori"
  //   ),
  //   price: Yup.number().required("Harga produk tidak boleh kosong"),
  //   images: Yup.array().min(1, "Upload minimal 1 gambar"),
  // });

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required("Nama produk tidak boleh kosong"),
  //   description: Yup.string().required("Deskripsi produk tidak boleh kosong"),
  //   category: Yup.string().notOneOf(
  //     ["Pilih kategori produk"],
  //     "Pilih kategori"
  //   ),
  //   price: Yup.number().required("Harga produk tidak boleh kosong"),
  //   images: Yup.array()
  //     .min(1, "Upload minimal 1 gambar")
  //     .required("Gambar produk tidak boleh kosong"),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     description: "",
  //     category: "",
  //     price: "",
  //     images: [],
  //   },
  //   validationSchema,
  //   onSubmit: async (values) => {
  //     try {
  //       const { title, description, img, categoryId, price, gallery } = values;

  //       const response = await axios.post(
  //         `${server}/product/create-product`,
  //         {
  //           title,
  //           description,
  //           img,
  //           categoryId,
  //           price,
  //           gallery,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       // console.log("Response from server:", response.data);
  //       // toast.success("Produk berhasil diupload");
  //       // navigate("/dashboard");
  //       // window.location.reload();
  //     } catch (error) {
  //       console.error("Error uploading product:", error);
  //       // toast.error("Gagal mengupload produk. Silakan coba lagi.");
  //     }
  //   },
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   formik.handleSubmit();

  //   if (formik.isValid) {
  //     const formData = new FormData();
  //     formData.append("name", formik.values.name);
  //     formData.append("description", formik.values.description);
  //     formData.append("category", formik.values.category);
  //     formData.append("price", formik.values.price);

  //     for (let i = 0; i < formik.values.images.length; i++) {
  //       formData.append("images", formik.values.images[i]);
  //     }

  //     try {
  //       const response = await axios.post(
  //         `${server}/api/v1/product/create-product`,
  //         formData,
  //         {
  //           headers: {
  //             // "Content-Type": "multipart/form-data",
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       // console.log(token);

  //       console.log("Response from server:", response.data);
  //       toast.success("Produk berhasil diupload");
  //       navigate("/dashboard");
  //       window.location.reload();
  //     } catch (error) {
  //       console.error("Error uploading product:", error);
  //       toast.error("Gagal mengupload produk. Silakan coba lagi.");
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // console.log(formData);

    try {
      const response = await axios.post(
        `${server}/product/create-product`,
        formData,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response from server:", response.data);
      toast.success("Produk berhasil diupload");
      navigate("/dashboard");
      window.location.reload();
    } catch (error) {
      console.error("Error uploading product:", error);
      toast.error("Gagal mengupload produk. Silakan coba lagi.");
    }
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Upload Produk</h5>
      {/* create product form */}
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Nama Produk <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Masukkan nama produk Anda..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Deskripsi Produk <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Masukkan deskripsi produk Anda..."
          ></textarea>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Kategori <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            className="w-full mt-2 border h-[35px] rounded-[5px]"
          >
            <option value="Pilih kategori produk">Pilih Kategori</option>
            {allCategory &&
              allCategory.map((i) => (
                <option value={i.id} key={i.id}>
                  {i.name}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Harga <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Masukkan harga produk..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload Gambar <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle
                size={30}
                className="mt-5 ml-10"
                color="#555"
              />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={i}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Upload"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
