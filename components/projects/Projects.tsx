"use client";

import { BsGithub } from "react-icons/bs";

import { usePathname } from "next/navigation";
import Item from "./Item";

const Projects = () => {
  const pathName = usePathname();

  return (
    <section
      id="projects"
      className={`${
        pathName === "/projects/" ? "xpt" : "py-8"
      } px-5 flex items-center justify-center`}
    >
      <div>
        <h1 className="text-3xl pb-8 text-center">Notable projects</h1>
        <div className="grid mx-auto gap-8 md:grid-cols-2">
          <Item
            name="NigaPHP framework"
            headerImg="/assets/images/project-nigaphp.webp"
            description="NigaPHP is a lightweight PHP web application framework designed to simplify and speed up the development process for PHP developers. It was initially created by Abass Dev and has since been maintained and contributed to by a community of developers. With its user-friendly interface and powerful features, NigaPHP has become a popular choice for building scalable and secure web applications."
            seeMore={{
              url: "https://docs.nigaphp.abassdev.com",
              before: "Let's discover",
              text: "NigaPHP Framework",
              after: "in 5 minutes.",
            }}
            techs={["php", "javascript", "shell", "twig"]}
            headerLinks={{
              github: {
                url: "https://nigaphp.abassdev.com",
                icon: <BsGithub />,
              },
            }}
          />

          <Item
            name="Repo Inspector"
            headerImg="/assets/images/repo-inspector.jpg"
            description="Repo Inspector is an innovative project designed to empower users with in-depth insights into their GitHub or GitLab repositories. With Repo Inspector, you gain a powerful tool that goes beyond the surface level, allowing you to unlock a wealth of information about your codebase."
            seeMore={{ url: "/repo-inspector", text: "Give it a try..." }}
            techs={["react", "bootstrap"]}
            headerLinks={{
              github: {
                url: "https://github.com/abass-dev/abassdev.com",
                icon: <BsGithub />,
              },
            }}
          />

          <Item
            name="Dynacard"
            headerImg="/assets/images/javascript-code.webp"
            description="Dynacard is a React Native library that enables developers to effortlessly design visually stunning cards for their applications. This open-source library provides a flexible and customizable platform for creating beautiful cards within your React Native project."
            seeMore={{
              url: "https://www.npmjs.com/package/dynacard",
              text: "Dynacard",
              before: "Checkout",
              after: "on NPM (Nodejs Package Manager)",
            }}
            techs={["javascript", "react native"]}
            headerLinks={{
              github: {
                url: "https://github.com/abass-dev/dynacard",
                icon: <BsGithub />,
              },
            }}
          />
          <Item
            name="Form builder"
            headerImg="/assets/images/php_code.webp"
            description="Looking for a user-friendly solution for building HTML forms? Check out Form Builder, an open-source project created by Abass Dev. The project is coded with PHP and styled using Bootstrap CSS, making it simple to create custom forms with ease."
            seeMore={{
              url: "https://packagist.org/packages/benosp/formbuilder",
              text: "Form builder",
              before: "Checkout",
              after: "on packagist",
            }}
            techs={["php", "css", "bootstrap"]}
            headerLinks={{
              github: {
                url: "https://github.com/abass-dev/BenOSP-FormBuilder",
                icon: <BsGithub />,
              },
            }}
          />

          <Item
            name="Abassdev.com (personal website)"
            headerImg="/assets/images/project-portfolio.webp"
            description="This portfolio was build using ReactJs (Typescript). By using ReactJs, the developer can create reusable UI components that can be used across the entire application, making it easier to maintain and update. ReactJs also provides a virtual DOM (Document Object Model) that allows for faster updates to the user interface compared to traditional web development techniques."
            seeMore={{
              url: "https://github.com/nextjs-abassdev",
              text: "code source",
              before: "Checkout the",
              after: "of this website.",
            }}
            techs={[
              "react",
              "typescript",
              "nodejs",
              "php",
              "express",
              "firebase",
              "mysql",
            ]}
            headerLinks={{
              github: {
                url: "https://github.com/abass-dev/nextjs-abassdev",
                icon: <BsGithub />,
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
