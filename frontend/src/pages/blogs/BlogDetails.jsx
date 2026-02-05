import React from "react";
import authorImg from "../../assets/authors/author-1.png";
import blogImg from "../../assets/blogs/blog-1.png";

const BlogDetails = () => {
  return (
    <div className="conatainer max-w-7xl mx-auto px-4 py-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Understanding the most Important React Context API
        </h2>
        <div className=" flex items-center mb-4">
          <img src={authorImg} alt="" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-lg font-medium">Tracey Wilson</p>
            <p className="text-gray-500">2/5/2026</p>
          </div>
        </div>
        <img
          src={blogImg}
          alt=""
          className="w-full md:h-120 object-cover rounded-md mb-4"
        />
        <div className=" space-y-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            voluptate necessitatibus labore alias ipsam ut doloremque qui culpa,
            omnis adipisci laborum obcaecati impedit pariatur quod molestias
            ducimus error sed itaque doloribus nesciunt repellat a iusto sunt
            saepe. Magnam magni ullam corrupti praesentium, odio quia dolor
            doloribus corporis quam quibusdam est quos vero eos odit nihil
            quisquam soluta beatae aliquam! Molestiae voluptates distinctio est
            nemo inventore sapiente laudantium, provident exercitationem sed
            architecto illum beatae consequatur pariatur laboriosam, eaque
            dolorem laborum quidem nesciunt quibusdam tenetur minus harum
            impedit quos repellat! Illo modi, possimus maiores maxime
            reprehenderit illum architecto quisquam enim aut corporis?
          </p>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              eius pariatur et cupiditate commodi saepe vitae reprehenderit,
              voluptatem sint non suscipit illum, itaque aperiam error soluta
              libero iste ratione? Odit maiores accusantium itaque praesentium
              illo beatae quis nemo reiciendis velit nam voluptas consequatur
              saepe quam assumenda explicabo provident esse enim aliquid error
              iusto corporis, deserunt ad, veniam pariatur? Atque obcaecati
              perferendis doloribus voluptatem repellat optio iste totam
              delectus incidunt, minima rem explicabo neque, aspernatur
              accusantium, vel id accusamus numquam. Assumenda asperiores
              laborum velit facere. Provident, facilis consectetur. Pariatur
              ipsam, nihil quam ratione inventore eum dolore architecto hic
              praesentium minus quisquam sint fugit nobis fugiat beatae libero
              reprehenderit molestias rem ut perspiciatis tempore quas totam
              voluptatum? Quisquam quos hic sequi iusto inventore dolorem veniam
              quia, fuga cumque assumenda dolore dolorum at amet ducimus illo
              ipsam iste asperiores consectetur dolores error eligendi expedita
              fugit, nostrum voluptatem. Ipsum, esse. Sapiente perspiciatis
              sequi molestiae? Praesentium temporibus eum tempore veritatis
              autem quos quo quia a aut sint, assumenda laudantium, sit minima
              omnis repellat aspernatur. Voluptates possimus atque eaque
              voluptate dolor perferendis nemo ducimus, natus velit assumenda!
              Velit, eos aut? Itaque quidem minus iusto adipisci quam explicabo
              dignissimos illum, inventore cum! Molestias, ipsum rerum? Quaerat,
              molestias.
            </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
