import React from "react";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 pt-20">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="relative w-full py-8">
          <div className="mx-auto max-w-4xl rounded-lg bg-white bg-opacity-0 px-6 text-center ">
            <h1 className="mb-6 text-4xl font-bold text-white">Our Story</h1>
            <div className="relative mb-6 h-64 w-full">
              <img
                src="https://explorez.com/wp-content/uploads/2022/04/Paris_Rue-du-Rivoli_Adisa_AdobeStock_Commercial-scaled.jpeg"
                alt="Our Story"
                className="size-full rounded-lg object-cover opacity-80 shadow-lg"
              />
            </div>
            <p className="text-lg leading-relaxed text-white">
              Glogs was born from a passion for storytelling and media. We
              wanted to create a platform where writers, creators, and
              journalists could share their ideas with the world in an engaging
              and meaningful way.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white">
              Inspired by modern digital media, we blend technology with
              creativity to offer an intuitive and dynamic blogging experience.
              Whether youre a seasoned writer or just starting, Glogs empowers
              you to tell your story with impact.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white">
              Join us as we continue to evolve, innovate, and inspire through
              the power of words and media.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurStory;
