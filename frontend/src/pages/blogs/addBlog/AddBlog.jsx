import React from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";

const AddBlog = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const blogData = {
        title: data.title,
        description: data.description,
        image: data.image,
        author:{
            name: data.authorName,
            image: data.authorImageURL
        },
    }
   try {
    const response = await axios.post(`http://localhost:5000/blogs/add-post`, blogData); 
    // console.log("Blog added successfully:", response.data);
    if(response.status === 200){
        alert("Blog added successfully")
        reset()
        navigate('/')
    }

   } catch (error) {
    console.log('Error posting a new blog', error)
   }
  };
  return (
    <>
      <div className=" container max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-2xl font-bold mb-6">Add New Blog</h2>

        {/* form */}
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white max-w-3xl p-6 rounded-lg shadow-md space-y-4"
          >
            <InputField
              label="Blog Title"
              placeholder="Enter Blog Title"
              id="title"
              type="text"
              register={register("title", { required: true })}
            />
            {/* text area */}
            <TextAreaField
              label="Blog Description"
              placeholder="Enter Blog Description"
              id="description"
              type="text"
              register={register("description", { required: true })}
            />

            <InputField
              label="Author Name"
              placeholder="Enter Author Name"
              id="authorName"
              type="text"
              register={register("authorName", { required: true })}
            />
            <InputField
              label="Author Image URL"
              placeholder="Enter Author Image URL"
              id="authorImageURL"
              type="url"
              register={register("authorImageURL", { required: true })}
            />
            <InputField
              label="Blog Image URL"
              placeholder="Enter Blog Image URL"
              id="image"
              type="url"
              register={register("image", { required: true })}
            />

            <div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
