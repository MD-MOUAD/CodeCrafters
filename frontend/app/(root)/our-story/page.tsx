import React from "react";

const OurStory = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
            <section className="relative py-8 w-full">
                <div className="max-w-4xl mx-auto px-6 text-center bg-white bg-opacity-0 rounded-lg ">
                    <h1 className="text-4xl font-bold text-white mb-6">Our Story</h1>
                    <div className="relative w-full h-64 mb-6">
                        <img 
                            src="https://explorez.com/wp-content/uploads/2022/04/Paris_Rue-du-Rivoli_Adisa_AdobeStock_Commercial-scaled.jpeg" 
                            alt="Our Story"
                            className="w-full h-full object-cover rounded-lg shadow-lg opacity-80"
                        />
                    </div>
                    <p className="text-lg text-white leading-relaxed">
                        Glogs was born from a passion for storytelling and media. We wanted to create a platform where writers, creators, and journalists 
                        could share their ideas with the world in an engaging and meaningful way. 
                    </p>
                    <p className="mt-4 text-lg text-white leading-relaxed">
                        Inspired by modern digital media, we blend technology with creativity to offer an intuitive and dynamic blogging experience. 
                        Whether you're a seasoned writer or just starting, Glogs empowers you to tell your story with impact.
                    </p>
                    <p className="mt-4 text-lg text-white leading-relaxed">
                        Join us as we continue to evolve, innovate, and inspire through the power of words and media.
                    </p>
                </div>
            </section>
        </div>
        </div>
        
    );
};

export default OurStory;
