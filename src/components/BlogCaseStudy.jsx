import React from 'react';

const BlogCaseStudy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">
        How I Built My Portfolio Website
      </h1>

      {/* Why I Built It */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Why I Built It</h2>
        <p className="mb-4">
          As a frontend web developer, having an online presence is essential. I
          built my portfolio website not just to showcase my projects, but also
          to demonstrate my skills in React, Tailwind CSS, and modern web
          development best practices. It serves as a personal brand, a
          professional resume, and a platform where potential employers and
          clients can learn more about who I am and what I can do.
        </p>
        <p>
          Creating this website was also a learning journey. It helped me
          solidify my understanding of React, custom hooks, component
          structuring, and responsive UI design. More importantly, it gave me
          the opportunity to build something I’m proud of, from the ground up.
        </p>
      </section>

      {/* Tools & Technologies Used */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          Tools & Technologies Used
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>React.js</strong> – For building a dynamic and
            component-based frontend.
          </li>
          <li>
            <strong>Tailwind CSS</strong> – For utility-first styling and fast
            UI development.
          </li>
          <li>
            <strong>React Router</strong> – For managing page navigation in a
            single-page application.
          </li>
          <li>
            <strong>Vite</strong> – For fast bundling and development
            experience.
          </li>
          <li>
            <strong>Git & GitHub</strong> – For version control and hosting the
            codebase.
          </li>
          <li>
            <strong>Netlify / Vercel</strong> – For deploying and hosting the
            live website.
          </li>
        </ul>
      </section>

      {/* Project Structure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Project Structure</h2>
        <p className="mb-4">
          I organized the project in a way that promotes scalability and
          maintainability. Here's a simplified structure:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          {`src/
├── assets/             # Images, icons, and logos
├── components/         # Reusable UI components (Navbar, Footer, etc.)
├── pages/              # Each major page (Home, About, Portfolio, Blog, Contact)
├── App.jsx             # Root component with routing
├── main.jsx            # React entry point
└── index.css           # Tailwind directives and custom styles`}
        </pre>
        <p>
          Each component and page has its own file to ensure clean separation of
          concerns. This structure makes it easier to maintain and add new
          features over time.
        </p>
      </section>

      {/* Design & UI Decisions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Design & UI Decisions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Minimalist Aesthetic:</strong> I kept the color scheme
            neutral with accent colors to highlight important elements like
            buttons and links.
          </li>
          <li>
            <strong>Responsive Navbar:</strong> Built with Tailwind CSS and
            React hooks, the navbar transitions smoothly between desktop and
            mobile views.
          </li>
          <li>
            <strong>Section-Based Layouts:</strong> Each page has clearly
            defined sections (hero, about, projects, contact) with consistent
            spacing and typography.
          </li>
          <li>
            <strong>Interactive Elements:</strong> Buttons and hover states have
            subtle animations to make the site feel more dynamic.
          </li>
        </ul>
        <p className="mt-2">
          To ensure good UX, I focused on accessibility, fast load times, and
          intuitive navigation.
        </p>
      </section>

      {/* Challenges I Faced */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Challenges I Faced</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Routing Conflicts:</strong> Initially, I struggled with
            dynamic routing and state management between pages. I resolved this
            by properly using <code>react-router-dom</code> and isolating state
            where necessary.
          </li>
          <li>
            <strong>Mobile Menu Behavior:</strong> Making the mobile menu
            open/close smoothly and reset scroll behavior required careful use
            of <code>useEffect</code>.
          </li>
          <li>
            <strong>Deployment Bugs:</strong> I faced CORS and 404 issues when
            deploying on Netlify. Configuring a <code>_redirects</code> file in
            the <code>public/</code> folder solved the issue for React Router
            routes.
          </li>
        </ul>
      </section>

      {/* Final Thoughts */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Final Thoughts</h2>
        <p className="mb-2">
          Building my portfolio website was a rewarding experience that improved
          both my frontend development and problem-solving skills. It’s more
          than just a collection of pages—it’s a reflection of my passion for
          web development and continuous learning.
        </p>
        <p className="mb-2">
          I plan to keep evolving the website by adding features like:
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>A blog content management system (CMS)</li>
          <li>Dark/light theme toggling</li>
          <li>Integration with GitHub and LinkedIn APIs</li>
        </ul>
        <p>
          If you're a fellow developer or recruiter, feel free to explore my
          site and reach out through the contact form. I’m always open to
          collaboration, feedback, and new opportunities!
        </p>
      </section>
    </div>
  );
};

export default BlogCaseStudy;
