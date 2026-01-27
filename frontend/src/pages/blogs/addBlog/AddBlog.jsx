import React from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

const AddBlog = () => {
  return (
    <>
      <div className=" container max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-2xl font-bold mb-6">Add New Blog</h2>

        {/* form */}
        <div>
          <form className="bg-white max-w-3xl p-6 rounded-lg shadow-md space-y-4">
            <InputField 
            label="Blog Title"
            placeholder="Enter Blog Title"
            id="Title"
            type="text"
            />
                {/* text area */}
                <TextAreaField 
                label="Blog Description"
                placeholder="Enter Blog Description"
                id="description"
                type="text"
                />
            
            <InputField 
            label="Author Name"
            placeholder="Enter Author Name"
            id="AuthorName"
            type="text"
            />
            <InputField 
            label="Author Image URL"
            placeholder="Enter Author Image URL"  
            id="authorImageURL"
            type="url"
            />
            <InputField 
            label="Blog Image URL"
            placeholder="Enter Blog Image URL"
            id="image"
            type="url"
            />

            <div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
