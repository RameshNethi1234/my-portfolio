import React, { useState } from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("web");

  const categories = {
    web: [
      {
        photo: "https://tse2.mm.bing.net/th?id=OIP.HWAytpC-upTEaY_2_rFb8gHaHF&pid=Api&P=0&h=180",
        name: "E-Commerce WebSite",
        description:
          "An E-Commerce website where I have covered different functionalities like API calling, Authentication and Authorization, Contexts and many other technical aspects, username: rahul, password: rahul@2021",
        source: "#",
        demo: "https://sslvr.ccbp.tech/",
      },
      {
        photo: "img/web3.png",
        name: "Web3",
        description:
          "A cryptocurrency-style web page, focusing on sleek UI and modern CSS techniques.",
        source: "https://github.com/RameshNethi1234/crypto-currency",
        demo: "https://crypto-project-five-opal.vercel.app/",
      },
      {
        photo: "img/gym.png",
        name: "Levels",
        description:
          "A gym website created to boost local gym sales. Learned React basics and hosting on Vercel.",
        source: "https://github.com/RameshNethi1234/gym-webpage",
        demo: "https://gym-website-pink.vercel.app/",
      },
      {
        photo: "img/backpack.png",
        name: "Ecommerce Landing Page",
        description:
          "A simple landing page for an Ecommerce website. Learned how to use custom cursors on web pages .",
        source: "https://github.com/RameshNethi1234/shopping-landinng-page",
        demo: "https://landing-page-react-sage.vercel.app/",
      },
    ],
    python: [
      {
        photo: "img/brick.png",
        name: "BrickBreaker",
        description:
          "A retro brick breaker game implemented in Python. Honed skills in Pygame and logic-building.",
        source: "https://github.com/RameshNethi1234/vrickbrick-wrecker",
        demo: "#",
      },
    ]
    
  };
  

  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>

      {/* Category Tabs */}
      <div className="categoryTabs">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`categoryTab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="project">
        {categories[activeCategory].map((project, index) => (
          <ProjectBox
            key={index}
            projectPhoto={project.photo}
            projectName={project.name}
            description={project.description}
            source={project.source}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
