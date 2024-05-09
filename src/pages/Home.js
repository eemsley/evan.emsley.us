import useScrollDirection from "../hooks/useScrollDirection";
import useScrollLocation from "../hooks/useScrollLocation";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { projects, skills } from "../data/data.js";
import { useEffect, useState } from "react";

function Home() {
  let scrollDirection = useScrollDirection();

  useEffect(() => {
    setClicked(false);
  }, [scrollDirection]);
  const position = useScrollLocation();
  const [clicked, setClicked] = useState(false);

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

  return (
    <div className="h-full w-full">
      <div className="h-screen w-24 transition-all duration-1000 left-0 top-0 flex items-center fixed">
        <div
          className={`h-24 bg-slate-600 absolute flex items-center justify-center rounded-r-xl z-0 ${
            socialsVisible ? "w-0" : "w-1/4"
          } transition-all duration-500 ease-in-out z-10  `}
          onMouseOver={() => setSocialsVisible(true)}
        >
          <ArrowForwardIosIcon style={{ width: "75%", color: "white" }} />
        </div>
        <div
          className={`bg-slate-600 justify-evenly flex flex-col items-center ${
            socialsVisible ? "w-3/4" : "w-0"
          } rounded-r-xl h-1/2 min-h-48 transition-all duration-500 ease-in-out z-10 shadow-2xl shadow-slate-600`}
          onMouseOver={() => setSocialsVisible(true)}
          onMouseOut={() => setSocialsVisible(false)}
        >
          <a
            href="https://github.com/eemsley"
            target="_blank"
            rel="noreferrer"
            className={`w-full flex flex-col justify-center items-center  ${
              socialsVisible
                ? "text-slate-50 hover:text-lime-400"
                : "text-transparent"
            }`}
          >
            <GitHubIcon style={{ width: "90%" }} />
            <p className={`text-xs mb-2 transition-all duration-500`}>Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/evan-emsley/"
            target="_blank"
            rel="noreferrer"
            className={`w-full flex flex-col justify-center items-center  ${
              socialsVisible
                ? "text-slate-50 hover:text-blue-400"
                : "text-transparent"
            }`}
          >
            <LinkedInIcon style={{ width: "90%" }} />
            <p className={`text-xs mb-2 transition-all duration-500`}>
              LinkedIn
            </p>
          </a>
          <a
            href="https://www.instagram.com/evane273/"
            target="_blank"
            rel="noreferrer"
            className={`w-full flex flex-col justify-center items-center  ${
              socialsVisible
                ? "text-slate-50 hover:text-violet-400"
                : "text-transparent"
            }`}
          >
            <InstagramIcon style={{ width: "90%" }} />
            <p className={`text-xs mb-2 transition-all duration-500`}>
              Instagram
            </p>
          </a>
          <a
            href="mailto:evan@emsley.us"
            className={`w-full flex flex-col justify-center items-center  ${
              socialsVisible
                ? "text-slate-50 hover:text-teal-400"
                : "text-transparent"
            }`}
          >
            <EmailRoundedIcon style={{ width: "90%" }} />
            <p className={`text-xs mb-2 transition-all duration-500`}>Email</p>
          </a>
        </div>
      </div>
      <div
        className={`sticky ${
          scrollDirection === "down" || clicked === true ? "-top-16" : "top-0"
        }  ${
          position === 0 ? "bg-slate-600" : "bg-slate-600/20 hover:bg-slate-600"
        }
          h-16 transition-all duration-250 ease-in-out scroll-smooth`}
      >
        <div className="h-full w-full flex flex-row justify-center  text-slate-100 items-center">
          {!isMobile && (
            <div className="absolute left-0 w-1/4 flex p-4 items-center justify-center">
              <p className="text-lg px-1 rounded-lg italic">evan.emsley.us</p>
            </div>
          )}
          <div
            className={`w-3/4 h-full justify-evenly items-center flex ${
              isMobile ? "relative" : "absolute right-0"
            } `}
          >
            <a href="#Home" onClick={() => setClicked(true)}>
              <div class="group  text-slate-100 transition-all duration-300 ease-in-out">
                <p class="  bg-left-bottom bg-gradient-to-r from-lime-600 to-lime-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-lime-400">
                  Home
                </p>
              </div>
            </a>
            <a href="#Projects" onClick={() => setClicked(true)}>
              <div class="group  text-slate-100 transition-all duration-300 ease-in-out">
                <p class="bg-left-bottom bg-gradient-to-r  from-blue-600  to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-blue-400">
                  Projects
                </p>
              </div>
            </a>
            <a href="#Resume" onClick={() => setClicked(true)}>
              <div class="group  text-slate-100 transition-all duration-300 ease-in-out">
                <p class="bg-left-bottom bg-gradient-to-r  from-violet-600  to-violet-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-violet-400">
                  Resume
                </p>
              </div>
            </a>
            <a href="#About" onClick={() => setClicked(true)}>
              <div class="group  text-slate-100 transition-all duration-300 ease-in-out">
                <p class="bg-left-bottom bg-gradient-to-r  from-teal-600  to-teal-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-teal-400">
                  About
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className="h-full w-full items-center flex flex-col"
        onClick={() => setSocialsVisible(false)}
      >
        <div
          id="Home"
          className=" mt-12 w-5/6 max-w-6xl bg-slate-100 rounded-xl p-8 flex items-center justify-center flex-col flex-wrap"
        >
          <p className="text-4xl transition-all duration-1000 font-bold text-slate-600 pb-6">
            Welcome!
          </p>
          <p className="text-xl/tight text-center text-slate-600">
            I'm a Purdue Computer Science student, graduating in December 2024.
          </p>
          <p className="text-xl/tight text-slate-600 pb-8 text-center">
            Below is an overview of my skills, projects, and passions...
          </p>
          <div className="w-full flex flex-row items-center justify-center flex-wrap">
            <div className="w-5/6 max-w-2xl">
              <p className="text-sm/normal text-slate-600">
                I've been coding since middle school and am very passionate
                about software development. I've worked on projects from mobile
                applications to low-level operating system development, and am
                currently working through a machine learning project, the
                classic example of identifying hand-written numbers. This
                summer, I'm interning on the DevOps Team at Allegion in Carmel,
                Indiana. After graduation this December, I'm looking for a
                full-time software development position at an innovative company
                where I can explore new technologies and grow as a developer.{" "}
                <br />
                <br />I made this website with React and Tailwind CSS, deployed
                with Vercel. It's posted on my GitHub{" "}
                <a
                  href="https://github.com/eemsley/evan.emsley.us"
                  className="text-sky-600 underline hover:text-sky-300 transition-all duration-500 ease-in-out"
                >
                  here
                </a>
                . <br />
                <br />
                I'm always looking for new projects to work on, so feel free to
                email me at{" "}
                <a
                  className="text-sky-600 underline hover:text-sky-300 transition-all duration-500 ease-in-out"
                  href="mailto:evan@emsley.us"
                >
                  evan@emsley.us
                </a>
              </p>
            </div>
            <img
              src={require("../assets/Headshot.jpeg")}
              alt="headshot"
              className="w-1/6 min-w-24 rounded-full shadow-lg shadow-slate-600 ml-8"
            />
          </div>
          <div className="w-full  flex flex-row flex-wrap justify-evenly max-w-5xl space-x-2 items-center mt-8">
            {skills.map((skill) => (
              <p className="text-xs text-slate-100 p-2 bg-slate-600 rounded-full min-w-12 text-center hover:scale-110 transition-all duration-500 drop-shadow-xl mt-2">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div
          id="Projects"
          className=" mt-48 w-5/6 max-w-6xl bg-slate-100 rounded-xl p-8 flex items-center justify-center flex-col flex-wrap"
        >
          <div className="bg-slate-100 h-3/4 w-5/6 max-w-6xl pb-16 pt-8 flex flex-col items-center justify-center rounded-xl">
            <p className="text-4xl transition-all duration-1000 font-bold text-slate-600 pb-8">
              Projects
            </p>
            <div className=" w-full flex flex-row flex-wrap items-center justify-center">
              {projects.map((project) => (
                <div className=" w-1/2 min-w-72 aspect-square bg-slate-600 items-center justify-center flex flex-col p-4 border-8 border-slate-100 rounded-xl">
                  <a href={project.link}>
                    <p className="text-3xl font-bold text-slate-50 pb-2 text-center">
                      {project.title}
                    </p>
                  </a>
                  <p className="text-base text-slate-50 pb-4 text-center">
                    {project.technologies.join(", ")}
                  </p>
                  <img
                    src={project.image}
                    alt="project"
                    className="w-3/4 hover:w-full transition-all duration-1000 mb-4 border-2 shadow-lg shadow-slate-200 border-slate-200"
                  />
                  <p className="text-sm text-slate-50 text-center">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="Resume"
          className=" mt-48 w-5/6 max-w-6xl bg-slate-100 rounded-xl p-8 flex items-center justify-center flex-col flex-wrap"
        >
          <p className="text-4xl font-bold text-slate-600 pb-8">Resume</p>
          <div className="w-full max-w-4xl h-screen flex flex-row flex-wrap">
            <embed
              src={require("../assets/resume.pdf")}
              type="application/pdf"
              width="100%"
              height="85%"
              title="resume"
            />
          </div>
        </div>
        <div
          id="About"
          className=" mt-48 w-5/6 max-w-6xl bg-slate-100 rounded-xl p-8 flex items-center justify-center flex-col flex-wrap"
        >
          <p className="text-4xl font-bold text-slate-600 pb-8">
            More About Me
          </p>
          <div className="w-full flex flex-row flex-wrap justify-evenly items-center">
            <img
              src={require("../assets/about1.jpg")}
              alt="about1"
              className="w-1/2 min-w-64 p-2 shadow-xl shadow-slate-600"
            />

            <img
              src={require("../assets/about3.JPG")}
              alt="about3"
              className="w-1/2 min-w-64 p-2 shadow-xl shadow-slate-600"
            />
          </div>
          <p className="text-center text-slate-800 text-sm p-4 mt-4">
            Outside of coding, I love to travel and play music. I've been on
            countless road trips around the US with my family and friends,
            camping and living out of a minivan. I've played guitar since middle
            school and have been a part of many bands. Most notably, my best
            friends in high school and I formed the band Arboretum, and we've
            recorded lots of original music available on our Spotify. I play
            guitar for Campus House Ministries at Purdue, and I'm a member of
            the Phi Delta Theta fraternity at Purdue. To stay active I enjoy
            lifting weights, running, and biking.
          </p>
          <div className="w-full flex flex-row flex-wrap justify-evenly items-center">
            <img
              src={require("../assets/about5.JPG")}
              alt="about5"
              className="w-1/2 min-w-64 p-2 shadow-xl shadow-slate-600"
            />
            <img
              src={require("../assets/about4.JPG")}
              alt="about4"
              className="w-1/2 min-w-64 p-2 shadow-xl shadow-slate-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
