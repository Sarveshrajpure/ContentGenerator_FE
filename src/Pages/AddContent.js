import React, { useState } from "react";
import { useFormik } from "formik";
import { addContentSchema } from "../validations/AddContentValidations";
import { axiosInstance } from "../helpers/axiosHelper";
import { LineWave } from "react-loader-spinner";
import ContentPreview from "../Components/ContentPreview";

const AddContent = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(false);
  const [previewContentData, setPreviewContentData] = useState("");
  const onSubmit = async (values, actions) => {
    console.log(values);
    try {
      setError("");
      setLoader(true);
      await axiosInstance.post("/content/create", values);
      setLoader(false);
      setPreviewContentData(values);
      actions.resetForm();
      setPreview(true);
    } catch (error) {
      setLoader(false);
      setError(`Something went wrong! - ${error?.response?.status}`);
    }
  };
  const { values, handleBlur, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: { title: "", description: "", contentLink: "" },
    validationSchema: addContentSchema,
    onSubmit,
  });

  return (
    <div className="mt-14 w-full h-full  flex justify-center items-center">
      {preview ? (
        <ContentPreview content={previewContentData} setPreview={setPreview} />
      ) : (
        <div className="formWrapper">
          <div className="form-heading pb-4">
            <div className=" text-[32px] text-[#FFA28D] font-semibold">Lets get Started!</div>
            <div className="form-heading text-[18px] text-[#FFA28D] font-semibold">
              Create Content by filling these details
            </div>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-label-wrapper mb-2">
              <label className="block text-[#595959] text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className={`bg-gray-200 appearance-none border-2  ${
                  errors.title && touched.title ? "border-red-500" : "border-gray-200"
                }
              rounded w-full py-2 px-4 text-gray-700 leading-tight 
              focus:outline-none focus:bg-white focus:border-[#FFA28D]`}
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="text-[10px] text-red-500  min-h-4">
                {errors.title && touched.title ? errors.title : ""}
              </p>
            </div>
            <div className="input-label-wrapper mb-4">
              <label className="block text-[#595959] text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <input
                className={`bg-gray-200 appearance-none border-2  ${
                  errors.description && touched.description ? "border-red-500" : "border-gray-200"
                }
              rounded w-full py-2 px-4 text-gray-700 leading-tight 
              focus:outline-none focus:bg-white focus:border-[#FFA28D]`}
                id="description"
                type="text"
                name="description"
                placeholder="Description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="text-[10px] text-red-500  min-h-4">
                {errors.description && touched.description ? errors.description : ""}
              </p>
            </div>
            <div className="input-label-wrapper mb-4">
              <label className="block text-[#595959] text-sm font-bold mb-2" htmlFor="contentLink">
                Content Link
              </label>
              <input
                className={`bg-gray-200 appearance-none border-2  ${
                  errors.contentLink && touched.contentLink ? "border-red-500" : "border-gray-200"
                }
              rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
               focus:bg-white focus:border-[#FFA28D]`}
                id="contentLink"
                type="text"
                name="contentLink"
                placeholder=" Content Link"
                value={values.contentLink}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="text-[10px] text-red-500  min-h-4">
                {errors.contentLink && touched.contentLink ? errors.contentLink : ""}
              </p>
            </div>
            <div className="btn-wrapper flex justify-between items-center">
              <LineWave
                visible={loader}
                height="100"
                width="100"
                color="#FFA28D"
                ariaLabel="line-wave-loading"
              />

              <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-700
                text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  loader ? "hidden" : ""
                }`}
              >
                Submit
              </button>
            </div>
            <p className={`${error ? "visible" : "hidden"} text-[10px] text-red-500 pt-2`}>
              {error}
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddContent;
