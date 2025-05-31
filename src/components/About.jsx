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
            Hello, I'm Akhil, a passionate Web developer with a keen eye for
            MERN Stack . With a background in IT, I strive to create impactful
            and visually stunning Software solutions that leave a lasting
            impression.
          </p>
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Education &amp; Training
          </h1>

          <span>
            [Degree/Certification], [Institution], [Year]
            [Degree/Certification], [Institution], [Year] [Relevant Course],
            [Platform/Institution], [Year]
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Skills &amp; Expertise
          </h1>

          <span>
            Proficient in [Programming Languages] Experienced with [Software
            Tools/Technologies] Strong grasp of [Design Principles/Concepts]
            Excellent problem-solving skills Effective communicator and
            collaborator
          </span>
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
