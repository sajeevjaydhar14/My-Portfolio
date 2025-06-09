import React from 'react';

function About() {
  return (
    <>
      <div
        id="about"
        className="max-w-screen-2xl container mx-auto px-12 md:px-20 my-20 shadow-md pb-28"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p>
            Hi, I'm Sajeev Jaydhar, a passionate Frontend Developer with a
            strong foundation in HTML, CSS, React, Tailwind CSS, and Git. I
            graduated with a Bachelor of Computer Applications (BCA) in 2023,
            and since then, I've been dedicated to crafting clean, responsive,
            and user-friendly web interfaces. I enjoy turning ideas into reality
            through code and constantly strive to stay updated with the latest
            trends in frontend development.
          </p>
          <br />
          <h1 className="text-green-600 font-semibold text-xl">Education</h1>
          <span>
            <span> Bachelor of Computer Applications (BCA)</span>
            <br />
            <span>Droan Group of Colleges | 2019 – 2023</span>
            <br />
            <span>Graduated in 2023</span>
            <br />
            <span>
              <b> Key Subjects : </b>
            </span>
            Web Development, Data Structures, Computer Networks, DBMS Activities
            & Achievements: Built web projects using React, Participated in
            coding competitions
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Skills &amp; Expertise
          </h1>
          <h2 className="mt-4">Frontend Development</h2>
          <li> HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Responsive Design & Cross-Browser Compatibility</li>
          <li>Component-Based Architecture with React</li>
          <br />
          <h2> Frameworks & Libraries</h2>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li> React Hooks (useState, useEffect, etc.)</li>
          <br />
          <h2>Version Control</h2>
          <li> Git & GitHub</li>
          <li>Branching, Merging, Pull Requests</li>
          <br />
          <h2>Tools & Workflow</h2>
          <li> VS Code, Chrome DevTools </li>
          <li> NPM, Vite, Netlify </li>
          <li>Basic CLI usage</li>

          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Professional Experience
          </h1>
          <p className="my-4">
            <b>Frontend Web Developer : </b>
            Freelance and Personal Projects
          </p>
          <span>
            <li>
              Designed and developed responsive websites using HTML, CSS,
              JavaScript, and Tailwind CSS, focusing on clean UI/UX and
              performance optimization.
            </li>
            <li>
              Collaborated with open web APIs to build interactive applications,
              handling data fetching, state updates, and DOM manipulation
              efficiently.
            </li>
            <li>
              Applied React.js and React Hooks (useState, useEffect, useRef) to
              create dynamic components and manage application state in a
              modular way
            </li>
            <li>
              Used Git and GitHub for version control, and deployed projects on
              Netlify, practic
            </li>
            <li>
              • Built real-world apps like a Portfolio Website, Recipe Finder
              App, and E-Commerce Website, simulating real client needs,
              optimizing for accessibility, SEO, and cross sdevice
              compatibility.
            </li>
            <li>
              Continuously improved code quality using best practices, modular
              design, and clean architecture.
            </li>
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
