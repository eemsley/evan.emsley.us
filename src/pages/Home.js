import useScrollDirection from "../hooks/useScrollDirection";
import useScrollLocation from "../hooks/useScrollLocation";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { projects, skills } from "../data/data.js";
import { useEffect, useState } from "react";
import { ArrowBackIos } from "@mui/icons-material";

function Home() {
  let scrollDirection = useScrollDirection();

  useEffect(() => {
    setClicked(false);
  }, [scrollDirection]);

  const position = useScrollLocation();

  const [clicked, setClicked] = useState(false);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const [socialsVisible, setSocialsVisible] = useState(isMobile ? false : true);

  const scrollCarousel = (index) => {
    setCarouselIndex(index);
    const child = document.getElementById(index);
    child.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const carousel = () => {
    return (
      <div
        id={"carousel"}
        className={`no-scrollbar flex h-full w-full touch-pan-y flex-row overflow-x-scroll bg-primary-100 py-12 ${
          isMobile ? "pl-4 pr-8" : "px-48"
        }`}
      >
        {projects.map((project, index) => (
          <div
            id={index}
            className={`${
              index === carouselIndex ? "scale-110" : "hover:bg-primary-800/80"
            } mx-4 flex aspect-square h-full cursor-pointer flex-col items-center justify-center space-y-2 rounded-xl bg-primary-800 p-4 text-primary-50 shadow-lg shadow-primary-800 transition-all duration-500`}
            onClick={() => {
              scrollCarousel(index);
            }}
          >
            <p className={`${isMobile ? "text-base" : "text-xl"}`}>
              {project.title}
            </p>
            <p className={`${isMobile ? "text-xs" : "text-sm"}`}>
              {project.technologies.join(", ")}
            </p>
            <img className="h-2/5" src={project.image} alt="project" />
            <p className="text-xs">{project.description}</p>
            <div className="flex w-1/2 flex-row items-center justify-evenly text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-300 transition-all duration-500 hover:text-sky-400 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-300 transition-all duration-500 hover:text-sky-400 hover:underline"
                >
                  Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };
  const header = () => {
    return (
      <div
        className={`sticky ${
          scrollDirection === "down" || clicked === true ? "-top-16" : "top-0"
        }  ${position === 0 ? "bg-primary-800" : "bg-primary-800/30 hover:bg-primary-800"} duration-250 z-50 h-16 scroll-smooth border-b border-primary-100/50 transition-all ease-in-out`}
      >
        <div className="flex h-full w-full flex-row items-center  justify-center text-primary-50">
          <div className="absolute left-0 flex w-1/4 items-center justify-center p-4">
            <p className="rounded-lg px-1 text-lg italic">evan.emsley.us</p>
          </div>

          <div
            className={`flex h-full w-3/4 items-center justify-evenly ${
              isMobile ? "relative" : "absolute right-0"
            } `}
          >
            <a href="#Home" onClick={() => setClicked(true)}>
              <div class="group  text-primary-50 transition-all duration-300 ease-in-out">
                <p class="  bg-gradient-to-r from-lime-600 to-lime-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:text-lime-400 group-hover:bg-[length:100%_2px]">
                  Home
                </p>
              </div>
            </a>
            <a href="#Projects" onClick={() => setClicked(true)}>
              <div class="group  text-primary-50 transition-all duration-300 ease-in-out">
                <p class="bg-gradient-to-r from-blue-600  to-blue-400  bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:text-blue-400 group-hover:bg-[length:100%_2px]">
                  Projects
                </p>
              </div>
            </a>
            <a href="#Resume" onClick={() => setClicked(true)}>
              <div class="group  text-primary-50 transition-all duration-300 ease-in-out">
                <p class="bg-gradient-to-r from-violet-600  to-violet-400  bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:text-violet-400 group-hover:bg-[length:100%_2px]">
                  Resume
                </p>
              </div>
            </a>
            <a href="#About" onClick={() => setClicked(true)}>
              <div class="group  text-primary-50 transition-all duration-300 ease-in-out">
                <p class="bg-gradient-to-r from-teal-600  to-teal-400  bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:text-teal-400 group-hover:bg-[length:100%_2px]">
                  About
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  };
  const socialTabs = () => {
    return (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-24 items-center transition-all duration-1000">
        <div
          className={`absolute z-0 flex h-24 items-center justify-center rounded-r-xl border-b border-r border-t border-primary-100 bg-primary-800 shadow-xl shadow-primary-800 ${
            socialsVisible ? "w-0" : "w-1/4"
          } z-10 transition-all duration-500 ease-in-out  `}
          onMouseOver={() => setSocialsVisible(true)}
        >
          <ArrowForwardIosIcon style={{ width: "75%", color: "white" }} />
        </div>
        <div
          className={`flex flex-col items-center justify-evenly bg-primary-800 ${
            socialsVisible ? "w-3/4 border-b border-r border-t" : "w-0"
          } z-10 h-1/2 min-h-48 rounded-r-xl border-primary-100 shadow-2xl shadow-primary-800 transition-all duration-500 ease-in-out`}
          onMouseOver={() => setSocialsVisible(true)}
          onMouseOut={() => setSocialsVisible(false)}
        >
          <a
            href="https://github.com/eemsley"
            target="_blank"
            rel="noreferrer"
            className={`flex w-full flex-col items-center justify-center  ${
              socialsVisible
                ? "text-primary-50 hover:text-lime-300"
                : "text-transparent"
            }`}
          >
            <GitHubIcon style={{ width: "90%" }} />
            <p className={`mb-2 text-xs transition-all duration-500`}>Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/evan-emsley/"
            target="_blank"
            rel="noreferrer"
            className={`flex w-full flex-col items-center justify-center  ${
              socialsVisible
                ? "text-primary-50 hover:text-blue-300"
                : "text-transparent"
            }`}
          >
            <LinkedInIcon style={{ width: "90%" }} />
            <p className={`mb-2 text-xs transition-all duration-500`}>
              LinkedIn
            </p>
          </a>
          <a
            href="https://www.instagram.com/evane273/"
            target="_blank"
            rel="noreferrer"
            className={`flex w-full flex-col items-center justify-center  ${
              socialsVisible
                ? "text-primary-50 hover:text-violet-300"
                : "text-transparent"
            }`}
          >
            <InstagramIcon style={{ width: "90%" }} />
            <p className={`mb-2 text-xs transition-all duration-500`}>
              Instagram
            </p>
          </a>
          <a
            href="mailto:evan@emsley.us"
            className={`flex w-full flex-col items-center justify-center  ${
              socialsVisible
                ? "text-primary-50 hover:text-teal-300"
                : "text-transparent"
            }`}
          >
            <EmailRoundedIcon style={{ width: "90%" }} />
            <p className={`mb-2 text-xs transition-all duration-500`}>Email</p>
          </a>
        </div>
      </div>
    );
  };
  const mobileSocialTabs = () => {
    return (
      <div className="flex w-full flex-row items-center justify-evenly bg-primary-800 py-3">
        <a
          href="https://github.com/eemsley"
          target="_blank"
          rel="noreferrer"
          className={`flex w-full flex-col items-center justify-center text-primary-50 hover:text-lime-400`}
        >
          <GitHubIcon style={{ width: "90%" }} />
          <p className={`text-xs transition-all duration-500`}>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/evan-emsley/"
          target="_blank"
          rel="noreferrer"
          className={`flex w-full flex-col items-center justify-center text-primary-50 hover:text-lime-400`}
        >
          <LinkedInIcon style={{ width: "90%" }} />
          <p className={`text-xs transition-all duration-500`}>LinkedIn</p>
        </a>
        <a
          href="https://www.instagram.com/evane273/"
          target="_blank"
          rel="noreferrer"
          className={`flex w-full flex-col items-center justify-center text-primary-50 hover:text-lime-400`}
        >
          <InstagramIcon style={{ width: "90%" }} />
          <p className={`text-xs transition-all duration-500`}>Instagram</p>
        </a>
        <a
          href="mailto:evan@emsley.us"
          className={`flex w-full flex-col items-center justify-center text-primary-50 hover:text-lime-400`}
        >
          <EmailRoundedIcon style={{ width: "90%" }} />
          <p className={`text-xs transition-all duration-500`}>Email</p>
        </a>
      </div>
    );
  };
  const intro = () => {
    return (
      <div
        id="Home"
        className=" mt-12 flex w-5/6 max-w-6xl flex-col flex-wrap  items-center justify-center rounded-xl bg-primary-100 p-8"
      >
        <p className="pb-6 text-4xl font-bold text-primary-800 transition-all duration-1000">
          Welcome!
        </p>
        <p className="text-center text-xl/tight text-primary-800">
          I'm Evan, a Purdue Computer Science student graduating in December
          2024.
        </p>
        <p className="pb-8 text-center text-xl/tight text-primary-800">
          Below is an overview of my skills, projects, and passions...
        </p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center">
          <div className="w-5/6 max-w-2xl">
            <p className="text-sm/normal text-primary-800">
              I've been coding since middle school and am very passionate about
              software development. I've worked on projects from full stack
              mobile applications to low-level operating system development.
              I've been interning on the DevOps Team at Allegion in Carmel,
              Indiana since May of 2024. After graduation this December, I'm
              looking for a full-time software development position at an
              innovative company where I can explore new technologies and grow
              as a developer. <br />
              <br />I made this website with React and Tailwind CSS, deployed
              with Vercel. It's posted on my GitHub{" "}
              <a
                href="https://github.com/eemsley/evan.emsley.us"
                className="text-sky-600 underline transition-all duration-500 ease-in-out hover:text-sky-300"
              >
                here
              </a>
              . <br />
              <br />
              I'm always looking for new projects to work on, so feel free to
              email me at{" "}
              <a
                className="text-sky-600 underline transition-all duration-500 ease-in-out hover:text-sky-300"
                href="mailto:evan@emsley.us"
              >
                evan@emsley.us
              </a>
            </p>
          </div>
          <img
            src={require("../assets/Headshot.jpeg")}
            alt="headshot"
            className="ml-8 w-1/6 min-w-24 rounded-full shadow-lg shadow-primary-800"
          />
        </div>
        <div className="mt-8  flex w-full max-w-5xl flex-row flex-wrap items-center justify-evenly space-x-2">
          {skills.map((skill) => (
            <p className="mt-2 min-w-12 rounded-full bg-primary-800 p-2 text-center text-xs text-primary-50 drop-shadow-xl transition-all duration-500 hover:scale-110">
              {skill}
            </p>
          ))}
        </div>
      </div>
    );
  };
  const mobileIntro = () => {
    return (
      <div
        id="Home"
        className=" mt-8 flex w-5/6 max-w-6xl flex-col flex-wrap items-center justify-center rounded-xl bg-primary-100 p-4"
      >
        <p className="pb-2 text-xl font-bold text-primary-800 transition-all duration-1000">
          Welcome!
        </p>
        <p className="text-center text-sm/tight text-primary-800">
          I'm Evan, a Purdue Computer Science student graduating in December
          2024.
        </p>
        <p className="pb-4 text-center text-sm/tight text-primary-800">
          Below is an overview of my skills, projects, and passions...
        </p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center">
          <div className="pb-4">
            <p className="text-xs/tight text-primary-800">
              I've been coding since middle school and am very passionate about
              software development. I've worked on projects from mobile
              applications to low-level operating system development, and am
              currently working through a machine learning project, the classic
              example of identifying hand-written numbers. This summer, I'm
              interning on the DevOps Team at Allegion in Carmel, Indiana. After
              graduation this December, I'm looking for a full-time software
              development position at an innovative company where I can explore
              new technologies and grow as a developer.
            </p>
          </div>
          <div className="flex w-full flex-row flex-wrap items-center justify-center">
            <p className="w-1/2 text-xs text-primary-800">
              I made this website with React and Tailwind CSS, deployed with
              Vercel. It's posted on my GitHub{" "}
              <a
                href="https://github.com/eemsley/evan.emsley.us"
                className="text-sky-600 underline transition-all duration-500 ease-in-out hover:text-sky-300"
              >
                here
              </a>
              . <br />
              <br />
              I'm always looking for new projects to work on, so feel free to
              email me at{" "}
              <a
                className="text-sky-600 underline transition-all duration-500 ease-in-out hover:text-sky-300"
                href="mailto:evan@emsley.us"
              >
                evan@emsley.us
              </a>
            </p>
            <div className="w-1/2 pl-4">
              <img
                src={require("../assets/Headshot.jpeg")}
                alt="headshot"
                className="w-full rounded-full bg-primary-100"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-center space-x-2">
          {skills.map((skill) => (
            <p className="mt-2 min-w-12 rounded-full bg-primary-800 p-2 text-center text-xs text-primary-50 transition-all duration-500 hover:scale-110">
              {skill}
            </p>
          ))}
        </div>
      </div>
    );
  };
  const projectsContent = () => {
    return (
      <div id="Projects" className="mt-48 w-full bg-primary-100 pb-8 pt-8">
        <p className="w-full text-center text-4xl  font-bold text-primary-800">
          Projects
        </p>
        <div
          style={{ maxHeight: 500 }}
          className={`h-[70vh] w-full justify-center`}
        >
          {carousel()}
        </div>
        <div className="flex w-full flex-row items-center justify-center">
          <div
            onClick={() => {
              if (carouselIndex > 0) {
                scrollCarousel(carouselIndex - 1);
              } else {
                scrollCarousel(projects.length - 1);
              }
            }}
            className="mx-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary-800 text-primary-50 transition-all duration-500 hover:bg-primary-800/60"
          >
            <ArrowBackIos sx={{ fontSize: 20, paddingLeft: 0.5 }} />
          </div>
          <div className="flex w-1/6 cursor-pointer flex-row items-center justify-between rounded-full bg-primary-100 px-4 py-2">
            {projects.map((project, index) => (
              <div
                onClick={() => {
                  scrollCarousel(index);
                }}
                className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-500 ${
                  index === carouselIndex
                    ? "bg-primary-800"
                    : "bg-primary-200 hover:bg-primary-400"
                }`}
              />
            ))}
          </div>
          <div
            onClick={() => {
              if (carouselIndex < projects.length - 1) {
                scrollCarousel(carouselIndex + 1);
              } else {
                scrollCarousel(0);
              }
            }}
            className="mx-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary-800 text-primary-50 transition-all duration-500 hover:bg-primary-800/60"
          >
            <ArrowForwardIosIcon sx={{ fontSize: 20, paddingLeft: 0.5 }} />
          </div>
        </div>
      </div>
    );
  };
  const mobileProjects = () => {
    return (
      <div className="mt-12 w-full bg-primary-100 pb-4 pt-4">
        <p
          id="Projects"
          className="w-full text-center text-xl font-bold text-primary-800"
        >
          Projects
        </p>
        <div className={`h-[55vh] w-full bg-primary-100`}>{carousel()}</div>
        <div className="flex w-full flex-row items-center justify-center">
          <div
            onClick={() => {
              if (carouselIndex > 0) {
                scrollCarousel(carouselIndex - 1);
              } else {
                scrollCarousel(projects.length - 1);
              }
            }}
            className="mx-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary-800 text-primary-50 transition-all duration-500"
          >
            <ArrowBackIos sx={{ fontSize: 20, paddingLeft: 0.5 }} />
          </div>
          <div className="flex w-1/3 cursor-pointer flex-row items-center justify-between rounded-full bg-primary-100 px-4 py-2">
            {projects.map((project, index) => (
              <div
                onClick={() => {
                  scrollCarousel(index);
                }}
                className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-500 ${
                  index === carouselIndex
                    ? "bg-primary-800"
                    : "bg-primary-200 hover:bg-primary-400"
                }`}
              />
            ))}
          </div>
          <div
            onClick={() => {
              if (carouselIndex < projects.length - 1) {
                scrollCarousel(carouselIndex + 1);
              } else {
                scrollCarousel(0);
              }
            }}
            className="mx-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary-800 text-primary-50 transition-all duration-500"
          >
            <ArrowForwardIosIcon sx={{ fontSize: 20, paddingLeft: 0.5 }} />
          </div>
        </div>
      </div>
    );
  };
  const resume = () => {
    return (
      <div
        id="Resume"
        className=" mt-48 flex w-5/6 max-w-6xl flex-col flex-wrap items-center justify-center rounded-xl bg-primary-100 p-8"
      >
        <p className="pb-8 text-4xl font-bold text-primary-800">Resume</p>
        <div className="flex h-screen w-full max-w-4xl flex-row flex-wrap">
          <embed
            src={require("../assets/resume.pdf")}
            type="application/pdf"
            width="100%"
            height="85%"
            title="resume"
          />
        </div>
        <p className="text-center text-xs text-primary-800">
          *This PDF embed may not render on certain browsers, here's a{" "}
          <a
            href="https://drive.google.com/file/d/1_wYY8xe2iLNN1y9iez4TrmPk7Xpvdplg/view?usp=drive_link"
            target="_blank"
            className="text-sky-500 underline"
            rel="noreferrer"
          >
            link
          </a>
          .
        </p>
      </div>
    );
  };
  const mobileResume = () => {
    return (
      <div className="mt-12 flex h-3/4 w-5/6 max-w-6xl flex-col items-center justify-center rounded-xl bg-primary-100 p-4">
        <p className="pb-4 text-xl font-bold text-primary-800 transition-all duration-1000">
          Resume
        </p>
        <div className=" flex w-full flex-row flex-wrap items-center justify-center">
          <embed
            src={require("../assets/resume.pdf")}
            type="application/pdf"
            width="100%"
            height="85%"
            style={{ border: "1px solid gray" }}
            title="resume"
          />
        </div>
        <p className="text-center text-xs text-primary-800">
          *This PDF embed may not render on certain browsers, here's a{" "}
          <a
            href="https://drive.google.com/file/d/1_wYY8xe2iLNN1y9iez4TrmPk7Xpvdplg/view?usp=drive_link"
            target="_blank"
            className="text-sky-500 underline"
            rel="noreferrer"
          >
            link
          </a>
          .
        </p>
      </div>
    );
  };
  const about = () => {
    return (
      <div
        id="About"
        className=" mb-12 mt-48 flex w-5/6 max-w-6xl flex-col flex-wrap items-center justify-center rounded-xl bg-primary-100 p-8"
      >
        <p className="pb-8 text-4xl font-bold text-primary-800">
          More About Me
        </p>
        <p className="p-4 text-center text-sm text-primary-800">
          Outside of coding, I love to travel and play music. I've been on
          countless road trips around the US with my family and friends, camping
          and living out of a minivan. I've played guitar since middle school
          and have been a part of many bands. Most notably, my best friends in
          high school and I formed the band Arboretum, and we've recorded lots
          of original music available on our Spotify. I play guitar for Campus
          House Ministries at Purdue, and I'm a member of the Phi Delta Theta
          fraternity at Purdue. To stay active I enjoy lifting weights, running,
          and biking.
        </p>
        <div className="flex w-full flex-row flex-wrap items-center justify-evenly">
          <img
            src={require("../assets/about1.jpg")}
            alt="about1"
            className="w-1/2 min-w-64 rounded-tl-xl"
          />

          <img
            src={require("../assets/about3.JPG")}
            alt="about3"
            className="w-1/2 min-w-64 rounded-tr-xl"
          />
        </div>

        <div className="flex w-full flex-row flex-wrap items-center justify-evenly">
          <img
            src={require("../assets/about5.JPG")}
            alt="about5"
            className="w-1/2 min-w-64 rounded-bl-xl"
          />
          <img
            src={require("../assets/about4.JPG")}
            alt="about4"
            className="w-1/2 min-w-64 rounded-br-xl"
          />
        </div>
      </div>
    );
  };
  const mobileAbout = () => {
    return (
      <div
        id="About"
        className=" mb-12 mt-12 flex  w-5/6 flex-col flex-wrap items-center justify-center rounded-xl bg-primary-100 px-2 pb-2 pt-4"
      >
        <p className="text-xl font-bold text-primary-800">More About Me</p>

        <p className="px-4 pb-4 text-xs/tight text-primary-800">
          Outside of coding, I love to travel and play music. I've been on
          countless road trips around the US with my family and friends, camping
          and living out of a minivan. I've played guitar since middle school
          and have been a part of many bands. Most notably, my best friends in
          high school and I formed the band Arboretum, and we've recorded lots
          of original music available on our Spotify. I play guitar for Campus
          House Ministries at Purdue, and I'm a member of the Phi Delta Theta
          fraternity at Purdue. To stay active I enjoy lifting weights, running,
          and biking.
        </p>
        <div className="flex w-full flex-row flex-wrap items-center justify-evenly">
          <img
            src={require("../assets/about5.JPG")}
            alt="about5"
            className="w-1/2 rounded-tl-xl"
          />
          <img
            src={require("../assets/about4.JPG")}
            alt="about4"
            className="w-1/2 rounded-tr-xl"
          />
          <img
            src={require("../assets/about1.jpg")}
            alt="about1"
            className="w-1/2 rounded-bl-xl"
          />

          <img
            src={require("../assets/about3.JPG")}
            alt="about3"
            className="w-1/2 rounded-br-xl"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      {!isMobile && socialTabs()}
      {!isMobile && header()}
      <div
        id="wrapper"
        className="flex h-full w-full flex-col items-center"
        onClick={() => setSocialsVisible(false)}
      >
        {isMobile && mobileSocialTabs()}
        {isMobile ? mobileIntro() : intro()}
        {isMobile ? mobileProjects() : projectsContent()}
        {isMobile ? mobileResume() : resume()}
        {isMobile ? mobileAbout() : about()}
        {isMobile && (
          <p className="w-full pb-2 text-center text-xs text-primary-800">
            ...for best experience, visit this page from a computer!
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
