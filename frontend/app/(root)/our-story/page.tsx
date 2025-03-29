import React from "react";

const OurStory = () => {
  return (
    <section className="mt-16 bg-gray-100 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">Our Story</h1>
        <div className="relative mb-6 h-64 w-full">
          <img
            src="https://explorez.com/wp-content/uploads/2022/04/Paris_Rue-du-Rivoli_Adisa_AdobeStock_Commercial-scaled.jpeg"
            alt="Our Story"
            className="size-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <p className="text-lg leading-relaxed text-gray-700">
          Blogs was born from a passion for storytelling and media. We wanted to
          create a platform where writers, creators, and journalists could share
          their ideas with the world in an engaging and meaningful way.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Inspired by modern digital media, we blend technology with creativity
          to offer an intuitive and dynamic blogging experience. Whether
          you&qpos;re a seasoned writer or just starting, Glogs empowers you to
          tell your story with impact.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Join us as we continue to evolve, innovate, and inspire through the
          power of words and media.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
