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
          <span>
            [Job Title], [Company/Organization], [Dates] [Brief description of
            responsibilities and achievements] [Job Title],
            [Company/Organization], [Dates] [Brief description of
            responsibilities and achievements] [Freelance/Contract Work],
            [Client/Organization], [Dates] [Brief description of projects and
            contributions]
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Achievements &amp; Awards
          </h1>
          <span>
            [Award/Recognition], [Organization/Institution], [Year]
            [Achievement], [Organization/Platform], [Year]
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Mission Statement
          </h1>
          <p>
            My mission is to leverage my skills and creativity to deliver
            innovative [Your Field] solutions that exceed client expectations
            and contribute positively to the digital landscape. I am committed
            to continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
