import React from 'react';

function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      date: 'May 20, 2025',
      description:
        'A deep dive into useState, useEffect, and custom hooks to simplify your React development workflow.',
      link: 'https://www.w3schools.com/react/react_hooks.asp',
    },
    {
      id: 2,
      title: 'CSS Tricks Every Developer Should Know',
      date: 'May 15, 2025',
      description:
        'Master powerful CSS tips to improve layouts, animations, and responsive designs using Tailwind CSS.',
      link: 'https://tailwindcss.com/docs/installation/using-vite',
    },
    {
      id: 3,
      title: 'How I Built My Portfolio Website',
      date: 'May 10, 2025',
      description:
        'An inside look into how I designed and developed my portfolio using React and Tailwind CSS.',
      link: '../components/BlogCaseStudy.jsx',
    },
  ];
  return (
    <>
      <div id="blog" className="max-w-screen-lg mx-auto px-6 py-10">
        <h1 className="flex justify-center text-4xl font-bold mb-6 text-center shadow-lg bg-gray-50">
          My Blog
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-4 rounded-xl">
          <div className="p-8 md:w-1/2 md:h-1/2 w-full h-full order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Coffee with Me ☕
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Life is better with a good cup of coffee, a great book, and an
              open road.
            </p>
            <h3 className="text-xl text-center font-semibold mb-2">
              Travel ✈️
            </h3>
            <p className="text-gray-600">
              I love exploring new places, meeting new people, and capturing
              moments along the way. it’s not just about visiting new places,
              but about connecting with people and immersing myself in their
              cultures. Every journey introduces me to different traditions,
              stories, and ways of life, and I cherish the opportunity to learn
              from those I meet along the way. Traveling enriches my perspective
              and reminds me how beautifully diverse and connected our world
              truly is.
            </p>
          </div>

          <div className="md:mt-14 flex justify-center md:w-1/2 md:h-1/2 w-full h-full mt-4 overflow-hidden order-1 md:order-2">
            <img
              className="w-full h-full md:w-1/2 md:h-1/2 object-cover rounded-lg"
              src="../../public/blog-pic-colorfull.jpg"
              alt=""
            />
          </div>
        </div>

        <p className="text-center text-12 text-gray-600 mb-12 mt-12">
          Sharing my journey, learning, and tips as a frontend developer.
        </p>
        <div id="Blog" className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-lg p-6 shadow hover:shadow-xl transition duration-300 hover:bg-gray-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{blog.date}</p>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <a
                href={blog.link}
                className="text-blue-500 font-medium hover:underline"
                target="_blank"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
