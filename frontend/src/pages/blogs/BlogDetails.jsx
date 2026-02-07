import React, { use, useEffect, useState } from "react";
import authorImg from "../../assets/authors/author-1.png";
import blogImg from "../../assets/blogs/blog-1.png";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../../components/Loading";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/blogs/${id}`);
        setBlog(response.data.blog);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, []);

  if (isloading) return <Loading />;



  return (
    <div className="conatainer max-w-7xl mx-auto px-4 py-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">{blog?.title}</h2>
        <div className=" flex items-center mb-4">
          <img src={authorImg} alt="" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-lg font-medium">{blog?.author?.name}</p>
            <p className="text-gray-500">
              {" "}
              {blog?.date ? (
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              ) : (
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              )}
            </p>
          </div>
        </div>
        <img
          src={blog?.image || blogImg}
          alt=""
          className="w-full md:h-120 object-cover rounded-md mb-4"
        />
        <div className=" space-y-4">
          <p>{blog?.description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eius pariatur et cupiditate commodi saepe vitae reprehenderit,
            voluptatem sint non suscipit illum, itaque aperiam error soluta
            libero iste ratione? Odit maiores accusantium itaque praesentium
            illo beatae quis nemo reiciendis velit nam voluptas consequatur
            saepe quam assumenda explicabo provident esse enim aliquid error
            iusto corporis, deserunt ad, veniam pariatur? Atque obcaecati
            perferendis doloribus voluptatem repellat optio iste totam delectus
            incidunt, minima rem explicabo neque, aspernatur accusantium, vel id
            accusamus numquam. Assumenda asperiores laborum velit facere.
            Provident, facilis consectetur. Pariatur ipsam, nihil quam ratione
            inventore eum dolore architecto hic praesentium minus quisquam sint
            fugit nobis fugiat beatae libero reprehenderit molestias rem ut
            perspiciatis tempore quas totam voluptatum? Quisquam quos hic sequi
            iusto inventore dolorem veniam quia, fuga cumque assumenda dolore
            dolorum at amet ducimus illo ipsam iste asperiores consectetur
            dolores error eligendi expedita fugit, nostrum voluptatem. Ipsum,
            esse. Sapiente perspiciatis sequi molestiae? Praesentium temporibus
            eum tempore veritatis autem quos quo quia a aut sint, assumenda
            laudantium, sit minima omnis repellat aspernatur. Voluptates
            possimus atque eaque voluptate dolor perferendis nemo ducimus, natus
            velit assumenda! Velit, eos aut? Itaque quidem minus iusto adipisci
            quam explicabo dignissimos illum, inventore cum! Molestias, ipsum
            rerum? Quaerat, molestias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
