import Reveal from "../../animation/Reveal";


const About = () => {
   
  return (
    <>
      <section className="py-28 pb-5">
        <div className="container max-w-7xl px-4 mx-auto ">
          {/* hero */}
          <Reveal>
            <div className="text-center mb-20">
            <h1 className="text-4xl font-semibold">About Us</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ipsam iste inventore itaque, enim vel similique incidunt
              voluptatibus vitae libero quos obcaecati tempore sapiente dolore
              debitis, illo cumque voluptatum placeat! Illum fugit quasi quam
              expedita quibusdam totam officia possimus aspernatur,
            </p>
          </div>
          </Reveal>

          {/* mission */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">
                Our mission is to inspire growth, creativity, and connection by
                sharing knowledge that empowers people to live with purpose. We
                believe in building a space where ideas spark conversations,
                where challenges turn into opportunities, and where every reader
                feels part of a community striving for positive change.
              </p>
              <p>
                Through authentic storytelling, practical insights, and a
                commitment to continuous learning, we aim to make a meaningful
                impact—one post at a time.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full md:h-96 rounded-lg shadow-lg hover:scale-95 transition-all duration-200"
              />
            </div>
          </div>
          </Reveal>

          {/* vision */}
        <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-2 md:order-2">
              <h2 className="text-3xl font-semibold mb-4">Our vision </h2>
              <p className="mb-4">
                Our mission is to inspire growth, creativity, and connection by
                sharing knowledge that empowers people to live with purpose. We
                believe in building a space where ideas spark conversations,
                where challenges turn into opportunities, and where every reader
                feels part of a community striving for positive change.
              </p>
              <p>
                Through authentic storytelling, practical insights, and a
                commitment to continuous learning, we aim to make a meaningful
                impact—one post at a time.
              </p>
            </div>
            <div className="order-2 md:order-1">
              <img
                src="https://media.istockphoto.com/id/629170862/photo/2017-vision-button-on-white-computer-keyboard.jpg?s=2048x2048&w=is&k=20&c=4hhizjgZjtg_uitCpuyLN5N-M1ULMZjAvTqXGmxuHzw="
                className="w-full md:h-96 rounded-lg shadow-lg hover:scale-95 transition-all duration-200"
              />
            </div>
          </div>
        </Reveal>

          {/* team section */}
         <Reveal>
           <div>
            <h2 className="text-3xl font-semibold mb-12 text-center ">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl text-gray-700 ">John Doe</h3>
                <p className="text-gray-500">CEO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl text-gray-700 ">Jack Nackoe</h3>
                <p className="text-gray-500">CTO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl text-gray-700 ">Christain Buehner</h3>
                <p className="text-gray-500">lead Developer</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-95 transition-all duration-200">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl text-gray-700 ">Lady gaga</h3>
                <p className="text-gray-500">Project Manager</p>
              </div>
            </div>
          </div>
         </Reveal>

          {/* work with us */}
         <Reveal>
           <div className="my-16 bg-no-repeat bg-cover rounded-md bg-secondary ">
            <div className="py-12 bg-black/40 rounded-md h-full flex items-center justify-center text-center">
              <div className="space-y-3 p-4">
                <h2 className="text-2xl font-bold text-white">
                  What to Work With Us?
                </h2>
                <p className="text-sm text-white">
                  Get in touch and let's build something amazing togethers.
                </p>
                <button className="bg-white hover:bg-secondary hover:text-white text-secondary font-bold py-2 px-8 rounded-full cursor-pointer transition-all duration-200">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
         </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;
