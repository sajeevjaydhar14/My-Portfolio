import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
          <div>
            <div className="flex space-x-4 justify-center items-center text text-4xl">
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

            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Sajeev Jaydhar</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
