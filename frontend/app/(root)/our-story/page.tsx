import React from "react";

const OurStory = () => {
 
    return (
        <section className="bg-gray-100 py-16 mt-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
                <div className="relative w-full h-64 mb-6">
                    <img 
                        src="https://explorez.com/wp-content/uploads/2022/04/Paris_Rue-du-Rivoli_Adisa_AdobeStock_Commercial-scaled.jpeg" 
                        alt="Our Story"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Blogs was born from a passion for storytelling and media. We wanted to create a platform where writers, creators, and journalists 
                    could share their ideas with the world in an engaging and meaningful way. 
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Inspired by modern digital media, we blend technology with creativity to offer an intuitive and dynamic blogging experience. 
                    Whether you're a seasoned writer or just starting, Glogs empowers you to tell your story with impact.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Join us as we continue to evolve, innovate, and inspire through the power of words and media.
                </p>
            </div>
        </section>
    );
};

export default OurStory;
