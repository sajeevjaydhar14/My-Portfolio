import React from 'react';
import image from '../../public/profile.jpeg';
import jsLogo from '../../public/javascript.png';
import reactLogo from '../../public/reactjs.png';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <>
      <div
        id="home"
        className="max-w-screen-2xl container mx-auto px-12 md:px-20 my-16 shadow-md pb-28"
      >
        {/* Desttop Home */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-26 md:mt-16 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 mt-2 text-2xl md:text-4xl">
              <h1 className="text-2xl md:text-4xl mt-2">
                Hello, I'm a{' '}
                <span className="text-red-800 font-bold">
                  <Typewriter
                    words={[
                      'Frontend Developer',
                      'React.js Developer',
                      'Web Interface Engineer',
                      'JavaScript Developer',
                      'Creative Web Developer',
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I’m a passionate Frontend Web Developer with a strong foundation
              in HTML, CSS, JavaScript, and modern styling using Tailwind CSS.
              Currently, I’m diving deeper into building dynamic and scalable
              user interfaces using React.js. <br /> I’ve created projects
              including an E-commerce Website and a Recipe Finder App,
              showcasing my ability to build practical and engaging web
              applications. I focus on writing clean, responsive, and accessible
              code that brings designs to life. Graduated with a Bachelor of
              Computer Applications (BCA) in 2023, I’m continuously learning and
              improving to stay current with the latest web development trends
              and best practices.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center text-xl">Available on</h1>
                <ul className="flex space-x-5 mt-3 text-4xl">
                  <a href="https://github.com/sajeevjaydhar14" target="_blank">
                    <li>
                      <FaGithub style={{ color: '#181717' }} />
                    </li>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sajeev-jaydhar-828a422a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <li>
                      <FaLinkedin style={{ color: ' #0A66C2' }} />
                    </li>
                  </a>
                  <a
                    href="https://www.instagram.com/sajeevjaydhar_14?igsh=M3Y3dzlneDh3dnh5"
                    target="_blank"
                  >
                    <li>
                      <FaInstagram style={{ color: '#E1306C' }} />
                    </li>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1FHxU87N21/"
                    target="_blank"
                  >
                    <li>
                      <FaFacebook style={{ color: '#1877F2' }} />
                    </li>
                  </a>
                  <a
                    href="https://youtube.com/@sajeevjaydhar7236?si=5CBk61FdSUuPoW7U"
                    target="_blank"
                  >
                    <li>
                      <FaYoutube style={{ color: '#FF0000' }} />
                    </li>
                  </a>
                </ul>
              </div>

              <div className="space-y-2 sm:ml-8 mt-3">
                <h1 className="font-bold text-center text-xl">
                  Currently working on
                </h1>
                <div className="flex justify-center space-x-5 mt-4">
                  <img
                    className="w-[1em] h-[1em] text-4xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                    src={jsLogo}
                    alt=""
                  />
                  <img
                    className="w-[1em] h-[1em] text-4xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                    src={reactLogo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:ml-40 order-1 md:order-2">
            <div className="w-full md:w-full md:mt-16 flex justify-center object-cover">
              <img
                className="w-full max-w-xs md:w-[100%] md:h-[100%] h-auto rounded-lg"
                src={image}
                alt="Profile"
              />
            </div>
          </div>
        </div>
        {/* Mobile Home */}
      </div>
    </>
  );
}

export default Home;
