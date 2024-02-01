import React from "react";

const ContentPreview = ({ content, setPreview }) => {
  return (
    <div className="previewContent-wrapper w-[35rem] ">
      <div className="flex justify-center mb-5">
        <div className="heading text-[52px] text-[#FFA28D] font-semibold ">Content Preview</div>
      </div>
      <div className="previewContent-field-wrapper flex items-center mb-5">
        <div className="previewContent-field-label form-heading text-[18px] text-[#595959]">
          Title:&nbsp;
        </div>
        <div
          className="previewContent-field-value text-[16px] w-[25rem]
          text-wrap overflow-hidden whitespace-nowrap text-ellipsis"
        >
          {content?.title}
        </div>
      </div>
      <div className="previewContent-field-wrapper flex items-center mb-5">
        <div className="previewContent-field-label form-heading text-[18px] text-[#595959]">
          Description:&nbsp;
        </div>
        <div
          className="previewContent-field-value text-[16px] w-[25rem]
         text-wrap overflow-hidden whitespace-nowrap text-ellipsis"
        >
          {content?.description}
        </div>
      </div>
      <div className="previewContent-field-wrapper flex items-center mb-5">
        <div className="previewContent-field-label form-heading text-[18px] text-[#595959]">
          Content Link:&nbsp;
        </div>
        <div
          className="previewContent-field-value text-[16px] w-[25rem]
         text-wrap overflow-hidden whitespace-nowrap text-ellipsis"
        >
          {content?.contentLink}
        </div>
      </div>
      <div className="btn-wrapper w-full flex flex-col items-center ">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700
                text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setPreview(false);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ContentPreview;
