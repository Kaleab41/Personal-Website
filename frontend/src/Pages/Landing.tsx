import React from "react";
import { Link } from "react-router-dom"; // For routing to the Notes and Blog pages
import KaleabMesfin from "../assets/KaleabMesfin.jpg";

const Landing = () => {
  const handleScroll = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Landing Section */}
      <section
        id="landing"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <img
          src={KaleabMesfin}
          alt="Kaleab Mesfin"
          className="rounded-full h-32 w-32 mb-6"
        />
        <h1 className="text-5xl font-medium mb-4">Kaleab Mesfin</h1>
        <p className="text-xl text-gray-600 mb-6">
          Back-End Developer | Software Engineer | ML Enthusiast
        </p>

        {/* Horizontal Menu */}
        <div className="flex space-x-6 mb-6">
          <button
            onClick={() => handleScroll("about")}
            className="text-lg font-bold text-gray-900 hover:text-gray-600 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("tech-stacks")}
            className="text-lg font-bold text-gray-900 hover:text-gray-600 transition"
          >
            Tech Stacks
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="text-lg font-bold text-gray-900 hover:text-gray-600 transition"
          >
            Projects
          </button>
          <Link
            to="/notes"
            className="text-lg font-bold text-gray-900 hover:text-gray-600 transition"
          >
            Notes
          </Link>
          <Link
            to="/blog"
            className="text-lg font-bold text-gray-900 hover:text-gray-600 transition"
          >
            Blog
          </Link>
          <button
            onClick={() => handleScroll("book-recommendations")}
            className="text-lg font-bold text-gray-900 hover:text-gray-600 transition"
          >
            Books
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="text-lg font-bold text-gray-900 hover:text-gray-600 transition"
          >
            Contact
          </button>
        </div>

        <blockquote className="text-lg text-gray-600 italic max-w-2xl">
          "Gradient descent can write code better than you. I'm sorry." — Andrej
          Karpathy
        </blockquote>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6 border-t pt-12 border-gray-200"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Side: About Me Description */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-medium mb-6">About Me</h2>
            <p className="text-lg text-gray-600 leading-8">
              Hi, I'm Kaleab Mesfin, a Back-End Developer and Software Engineer
              based in Addis Ababa, Ethiopia. My expertise lies in crafting
              scalable back-end systems and building dynamic web applications. I'm
              deeply interested in Machine Learning and back-end development,
              driven by a passion for innovation and problem-solving.
            </p>
            <p className="text-lg text-gray-600 leading-8 mt-4">
              When I'm not coding, you'll often find me playing chess. I love the
              strategic depth and mental challenge the game offers. Chess has
              taught me patience, foresight, and the importance of planning—skills
              that I apply to my work as a developer.
            </p>
              {/* GitHub Contribution Graph */}
    <div className="mt-8 w-full">
      <h3 className="text-xl md:text-2xl font-medium mb-4">
        My GitHub Contributions
      </h3>
      <div className="overflow-x-auto">
        <img
          src="https://ghchart.rshah.org/Kaleab41"
          alt="Kaleab Mesfin's GitHub Contributions"
          className="w-full max-w-2xl mx-auto"
        />
      </div>
    </div>

    {/* Stack Overflow Profile */}
    <div className="mt-8 w-full">
      <h3 className="text-xl md:text-2xl font-medium mb-4">
        My Stack Overflow Activity
      </h3>
      <div className="flex justify-center">
        <a
          href="https://stackoverflow.com/users/12955516/defcon41"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          <img
            src={`https://stackoverflow.com/users/flair/12955516.png?theme=dark`}
            alt="Stack Overflow Profile for Defcon41"
            className="w-full max-w-xs md:max-w-sm"
          />
        </a>
      </div>
    </div>
          </div>

          {/* Right Side: Vertical Timeline */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-medium mb-6">Work & Education</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 w-1 h-full bg-gray-300"></div>

              {/* Timeline Items */}
              <div className="space-y-8 pl-8">
                {/* Founder and CEO - Adwa Dynamics Software Technologies */}
                <div className="relative">
                  <div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    1
                  </div>
                  <h3 className="text-2xl font-medium">Founder and CEO</h3>
                  <p className="text-lg text-gray-600">
                    Adwa Dynamics Software Technologies
                  </p>
                  <p className="text-sm text-gray-500">Apr 2024 - Present</p>
                  <p className="text-lg text-gray-600 mt-2">
                    Launched and oversee a software development company
                    specializing in innovative solutions. Manage end-to-end
                    software project lifecycles, ensuring on-time delivery and
                    client satisfaction. Leverage expertise in Flutter, Dart, and
                    Figma to design and deploy robust mobile applications.
                  </p>
                </div>

                {/* Chief Technology Officer - Safe Light Initiative */}
                <div className="relative">
                  <div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    2
                  </div>
                  <h3 className="text-2xl font-medium">
                    Chief Technology Officer
                  </h3>
                  <p className="text-lg text-gray-600">Safe Light Initiative</p>
                  <p className="text-sm text-gray-500">Jan 2019 - Present</p>
                  <p className="text-lg text-gray-600 mt-2">
                    Spearheaded technological strategies and product development
                    for a non-profit organization. Designed and implemented
                    scalable back-end systems and APIs to enhance operations. Led
                    software project management initiatives and collaborated with
                    cross-functional teams.
                  </p>
                </div>

                {/* Full-Stack Engineer - CodePoint Creatives */}
                <div className="relative">
                  <div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    3
                  </div>
                  <h3 className="text-2xl font-medium">Full-Stack Engineer</h3>
                  <p className="text-lg text-gray-600">CodePoint Creatives</p>
                  <p className="text-sm text-gray-500">Dec 2023 - Jan 2024</p>
                  <p className="text-lg text-gray-600 mt-2">
                    Contributed to the development of dynamic web applications as
                    part of a creative team. Integrated back-end functionality and
                    implemented seamless user experiences.
                  </p>
                </div>

                {/* Back-End Developer (Internship) - Purpose Black ETH */}
                <div className="relative">
                  <div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    4
                  </div>
                  <h3 className="text-2xl font-medium">
                    Back-End Developer (Internship)
                  </h3>
                  <p className="text-lg text-gray-600">Purpose Black ETH</p>
                  <p className="text-sm text-gray-500">Nov 2023 - Jan 2024</p>
                  <p className="text-lg text-gray-600 mt-2">
                    Built and optimized APIs for critical business applications.
                    Focused on server-side programming to support scalable
                    operations.
                  </p>
                </div>

                {/* Full-Stack Developer - Equb Systems */}
                <div className="relative">
                  <div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    5
                  </div>
                  <h3 className="text-2xl font-medium">Full-Stack Developer</h3>
                  <p className="text-lg text-gray-600">Equb Systems</p>
                  <p className="text-sm text-gray-500">Nov 2022 - Dec 2023</p>
                  <p className="text-lg text-gray-600 mt-2">
                    Delivered full-stack solutions, including front-end designs
                    and back-end functionalities. Led software project management
                    efforts, coordinating with stakeholders to meet goals.
                  </p>
                </div>

                {/* Mobile Application Developer - EthioCart */}
                <div className="relative">
                  <div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    6
                  </div>
                  <h3 className="text-2xl font-medium">
                    Mobile Application Developer
                  </h3>
                  <p className="text-lg text-gray-600">EthioCart</p>
                  <p className="text-sm text-gray-500">Jul 2022 - Dec 2022</p>
                  <p className="text-lg text-gray-600 mt-2">
                    Designed and developed intuitive mobile applications using
                    Flutter and Dart. Implemented user-friendly UI/UX designs and
                    interactive features.
                  </p>
                </div>

                {/* Education - HILCoE School of Computer Science and Technology */}
                <div className="relative">
                  <div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    7
                  </div>
                  <h3 className="text-2xl font-medium">Education</h3>
                  <p className="text-lg text-gray-600">
                    HILCoE School of Computer Science and Technology
                  </p>
                  <p className="text-sm text-gray-500">Oct 2019 - May 2024</p>
                  <p className="text-lg text-gray-600 mt-2">
                    Bachelor of Science (BS), Computer Science
                  </p>
                </div>

                {/* Education - Saint Joseph School */}
                <div className="relative">
                  <div className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    8
                  </div>
                  <h3 className="text-2xl font-medium">Education</h3>
                  <p className="text-lg text-gray-600">Saint Joseph School</p>
                  <p className="text-sm text-gray-500">2011 - 2019</p>
                  <p className="text-lg text-gray-600 mt-2">High School Diploma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stacks Section */}
      <section
        id="tech-stacks"
        className="min-h-screen flex flex-col justify-center items-center px-6 border-t border-gray-200"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-medium mb-8">Tech Stacks</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-medium mb-4">Languages</h3>
              <div className="flex justify-center gap-6">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                  className="h-12 w-12"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">Frameworks & Tools</h3>
              <div className="flex justify-center gap-6">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                  alt="GraphQL"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker"
                  className="h-12 w-12"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">Databases</h3>
              <div className="flex justify-center gap-6">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg"
                  alt="Neo4j"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                  alt="Redis"
                  className="h-12 w-12"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">Machine Learning</h3>
              <div className="flex justify-center gap-6">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                  alt="PyTorch"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                  alt="NumPy"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                  alt="Pandas"
                  className="h-12 w-12"
                />
                <img
                  src="https://images.seeklogo.com/logo-png/33/1/scikit-learn-logo-png_seeklogo-337685.png?v=1957906602230133864"
                  alt="Scikit-Learn"
                  className="h-12 w-12"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
                  alt="Matplotlib"
                  className="h-12 w-12"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">Coming Soon</h3>
              <div className="flex justify-center gap-6">
                <img
                  src="https://raw.githubusercontent.com/detain/svg-logos/master/svg/a/amazon-web-services-2.svg"
                  alt="AWS"
                  className="h-12 w-12"
                />
                <img
                  src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/nestjs.svg"
                  alt="NestJS"
                  className="h-12 w-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center px-6 border-t border-gray-200"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-medium mb-6">Projects</h2>
          <ul className="space-y-6 text-lg text-gray-600 leading-8">
            <li>
              <strong>Restaurant Management System</strong> – A platform to
              manage reservations, orders, and staff schedules seamlessly.
            </li>
            <li>
              <strong>Crowd Funding Page</strong> – A secure platform for
              individuals and organizations to raise funds for their projects.
            </li>
            <li>
              <strong>Additional Placeholder</strong> – Explore other projects
              that showcase my skills and creativity.
            </li>
          </ul>
        </div>
      </section>

      {/* Book Recommendations Section */}
      <section
        id="book-recommendations"
        className="min-h-screen flex flex-col justify-center items-center px-6 border-t border-gray-200"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-medium mb-6">Books</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">Currently Reading</h3>
              <ul className="text-lg text-gray-600 leading-8">
                <li>
                  <strong>Clean Code</strong> by Robert C. Martin
                </li>
                <li>
                  <strong>Designing Data-Intensive Applications</strong> by
                  Martin Kleppmann
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">Recommendations</h3>
              <ul className="text-lg text-gray-600 leading-8">
                <li>
                  <strong>The Pragmatic Programmer</strong> by Andrew Hunt and
                  David Thomas
                </li>
                <li>
                  <strong>Deep Learning</strong> by Ian Goodfellow, Yoshua
                  Bengio, and Aaron Courville
                </li>
                <li>
                  <strong>Atomic Habits</strong> by James Clear
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 border-t border-gray-200"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-medium mb-6">Contact Me</h2>
          <p className="text-lg text-gray-600 leading-8">
            Feel free to reach out to me via email or connect with me on Telegram
            or Twitter/X:
          </p>
          <ul className="mt-6 space-y-4 text-lg text-gray-600 leading-8">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:kaleabmesfinkebede@gmail.com"
                className="text-blue-600 hover:underline"
              >
                kaleabmesfinkebede@gmail.com
              </a>
            </li>
            <li>
              <strong>Telegram:</strong>{" "}
              <a
                href="https://t.me/Defcon41"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @Defcon41
              </a>
            </li>
            <li>
              <strong>Twitter/X:</strong>{" "}
              <a
                href="https://twitter.com/KaleabMesfin_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @KaleabMesfin41
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-gray-600 border-t border-gray-200">
        © 2025 Kaleab Mesfin | Powered by Passion & Code
      </footer>
    </div>
  );
};

export default Landing;