import React from 'react';

import ecomerceWeb from '../../public/ecomerceWeb.jpg';
import reactImg from '../../public/reactjs.png';
import recipeFinder from '../../public/recipeFinder.jpg';

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="max-w-screen-2xl container mx-auto px-6 md:px-20 mt-10 md:text-left shadow-md pb-28"
    >
      <h1 className="text-3xl text-center md:text-left font-bold mb-5">
        Portfolio
      </h1>
      <p className="text-center md:text-left underline font-semibold">
        Featured Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {/* Recipe Finder Project Card */}
        <div className="border-[2px] rounded-lg shadow-lg p-4 hover:scale-105 duration-300 hover:bg-gray-300">
          <img
            className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
            src={recipeFinder}
            alt="MongoDB Logo"
          />
          <div className="text-center mt-4">
            <h2 className="text-xl font-bold mb-2">Recipe Finder App</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="space-x-3">
              <a
                href="https://github.com/sajeevjaydhar14/Recipe-Finder.git"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
              >
                GitHub
              </a>
              <a
                href="https://recipe-get.netlify.app/"
                target="_blank"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Netlify
              </a>
            </div>
          </div>
        </div>

        {/* EcomerceWeb Project Card */}
        <div className="border-[2px] rounded-lg shadow-lg p-4 hover:scale-105 duration-300 hover:bg-gray-300">
          <img
            className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
            src={ecomerceWeb}
            alt=""
          />
          <div className="text-center mt-4">
            <h2 className="text-xl font-bold mb-2">E-Comerce Website</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="space-x-3">
              <a
                href="https://github.com/sajeevjaydhar14/E-Comerce-website.git"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
              >
                GitHub
              </a>
              <a
                href="https://ecmrc.netlify.app/"
                target="_blank"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Netlify
              </a>
            </div>
          </div>
        </div>
        {/* React Upcomming Project Card */}
        <div className="border-[2px] rounded-lg shadow-lg p-4 hover:scale-105 duration-300 hover:bg-gray-300">
          <img
            className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
            src={reactImg}
            alt="Express Logo"
          />
          <div className="text-center mt-4">
            <h2 className="text-xl font-bold mb-2">Upcomming Project</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="space-x-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                GitHub
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                Netlify
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Set */}
      <div className="mt-14 md:mt-18">
        <div>
          <h1 className="text-3xl font-bold mb-5 text-center">Skill Set</h1>

          <div className="">
            <table className="table-auto border-collapse border border-gray-400 w-full mx-auto mt-10">
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2 text-center font-bold">
                    Languges & Frameworks
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    HTML, CSS, Javascript, React js, Tailwind CSS.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-400 px-4 py-2 text-center font-bold">
                    Tools & Platforms
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    Git, GitHub, Vs code.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Core Competencies */}
          <p className="mt-10 mx-4 md:text-lg">
            <b className="text-xl md:text-2xl">Core Competencies : </b>
            Responsive Web Design, DOM Manipulation, API Integration,
            Component-Based Architecture, Version Control, Debugging & Testing
          </p>

          {/* Version Control Experience */}
          <div className="mx-4">
            <h1 className="text-xl font-bold mb-5 mx-auto mt-10 md:text-2xl">
              Version Control Experience
            </h1>
            <li className="my-3">
              Proficient with Git for version control, including branching,
              merging, and resolving conflicts.
            </li>
            <li>
              Regularly use GitHub for collaborative development, pull requests,
              and code reviews.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
