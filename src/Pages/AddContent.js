import React from "react";

const AddContent = () => {
  return (
    <div className="mt-14 w-full h-full  flex justify-center items-center">
      <div className="formWrapper">
        <div className="form-heading pb-4">
          <div className=" text-[32px] text-[#FFA28D] font-semibold">Lets get Started!</div>
          <div className="form-heading text-[18px] text-[#FFA28D] font-semibold">
            Create Content by filling these details
          </div>
        </div>
        <form>
          <div className="input-label-wrapper mb-4">
            <label class="block text-[#595959] text-sm font-bold mb-2" for="username">
              Title
            </label>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200
             rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FFA28D]"
              id="username"
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="input-label-wrapper mb-4">
            <label class="block text-[#595959] text-sm font-bold mb-2" for="username">
              Description
            </label>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200
             rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FFA28D]"
              id="username"
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="input-label-wrapper mb-4">
            <label class="block text-[#595959] text-sm font-bold mb-2" for="username">
              Content Link
            </label>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200
             rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FFA28D]"
              id="username"
              type="text"
              placeholder=" Content Link"
            />
          </div>
          <div className="btn-wrapper flex justify-between items-center">
            {" "}
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContent;
