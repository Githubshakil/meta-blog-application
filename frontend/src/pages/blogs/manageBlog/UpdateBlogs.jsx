import { useForm } from "react-hook-form";
import InputField from "../addBlog/InputField";
import TextAreaField from "../addBlog/TextAreaField";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";

const UpdateBlogs = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();


    useEffect(() => {
        const fetchSingleBlog = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/blogs/${id}`);
            
            const blog = response.data.blog
            setValue('title', blog.title)
            setValue('description', blog.description)
            setValue('authorName', blog.author.name)
            setValue('authorImageURL', blog.author.image)
            setValue('image', blog.image)
            
          } catch (error) {
            console.log("Error fetching blog details:", error);
          }
        }
        fetchSingleBlog()
    },[id, setValue])

  const onSubmit = (data) => {
    const blogData = {
      title: data.title,
      description: data.description,
      author: {
        name: data.authorName,
        image: data.authorImageURL,
      },
    };
    console.log(blogData);
  };
  return (
    <>
      <div className=" container max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-2xl font-bold mb-6">Update Blog</h2>

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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBlogs;
