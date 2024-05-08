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
  const [socialsVisible, setSocialsVisible] = useState(true);
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
          } rounded-r-xl h-1/2 transition-all duration-500 ease-in-out z-10 shadow-2xl shadow-slate-600`}
          onMouseOver={() => setSocialsVisible(true)}
          onMouseOut={() => setSocialsVisible(false)}
        >
          <div className="w-full flex flex-col justify-center items-center">
            <GitHubIcon style={{ width: "90%", color: "#f1f5f9" }} />
            <p
              className={`text-slate-50 text-xs mb-2 transition-all duration-500 ${
                socialsVisible ? "text-slate-50" : "text-transparent"
              }`}
            >
              Github
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <LinkedInIcon style={{ width: "90%", color: "#f1f5f9" }} />
            <p
              className={`text-slate-50 text-xs mb-2 transition-all duration-500 ${
                socialsVisible ? "text-slate-50" : "text-transparent"
              }`}
            >
              LinkedIn
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <InstagramIcon style={{ width: "90%", color: "#f1f5f9" }} />
            <p
              className={`text-slate-50 text-xs mb-2 transition-all duration-500 ${
                socialsVisible ? "text-slate-50" : "text-transparent"
              }`}
            >
              Instagram
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <EmailRoundedIcon style={{ width: "90%", color: "#f1f5f9" }} />
            <p
              className={`text-slate-50 text-xs mb-2 transition-all duration-500 ${
                socialsVisible ? "text-slate-50" : "text-transparent"
              }`}
            >
              Email
            </p>
          </div>
        </div>
      </div>
      <div
        className={`sticky ${
          scrollDirection === "down" || clicked === true ? "-top-16" : "top-0"
        }  ${position === 0 ? "bg-slate-600" : "bg-slate-600/80"}
          h-16 transition-all duration-250 ease-in-out scroll-smooth`}
      >
        <div className="h-full w-full flex flex-row justify-center  text-slate-100 items-center">
          <div className="absolute left-4 w-1/4 flex p-4">
            <p className="text-xl px-1 rounded-lg italic">evan.emsley.us</p>
          </div>
          <div className="w-3/4 h-full justify-evenly items-center flex absolute right-0">
            <a href="#Home" onClick={() => setClicked(true)}>
              <div class="group  text-slate-100 transition-all duration-300 ease-in-out">
                <p class="  bg-left-bottom bg-gradient-to-r from-slate-100 to-slate-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Home
                </p>
              </div>
            </a>
            <a href="#Projects" onClick={() => setClicked(true)}>
              <div class="group  text-slate-100 transition-all duration-300 ease-in-out">
                <p class="bg-left-bottom bg-gradient-to-r  from-slate-100  to-slate-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                  Projects
                </p>
              </div>
            </a>
            <a href="#Resume" onClick={() => setClicked(true)}>
              <div class="group  text-slate-100 transition-all duration-300 ease-in-out">
                <p class="bg-left-bottom bg-gradient-to-r  from-slate-100  to-slate-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Resume
                </p>
              </div>
            </a>
            <a href="#About" onClick={() => setClicked(true)}>
              <div class="group  text-slate-100 transition-all duration-300 ease-in-out">
                <p class="bg-left-bottom bg-gradient-to-r  from-slate-100  to-slate-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  About
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="h-full w-full items-center flex flex-col pb-24">
        <div
          id="Home"
          className="flex w-full flex-col justify-center items-center h-screen"
        >
          <div className="w-5/6 max-w-6xl bg-slate-100  rounded-xl mb-24 p-8 flex items-center justify-center flex-col">
            <p className="text-4xl transition-all duration-1000 font-bold text-slate-600 pb-6">
              Welcome!
            </p>
            <p className="text-xl/tight text-slate-600">
              I'm a Purdue Computer Science student, graduating in December
              2024.
            </p>
            <p className="text-xl/tight text-slate-600 pb-8">
              Below is an overview of my skills, projects, and passions...
            </p>
            <div className="w-full flex flex-row items-center">
              <div className="w-5/6">
                <p className="text-sm/normal text-slate-600 pr-12">
                  I've been coding since middle school and am very passionate
                  about software development. I've worked on projects from
                  mobile applications to low-level operating system development,
                  and am currently working through a machine learning project,
                  the classic example of identifying hand-written numbers. This
                  summer, I'm interning on the DevOps Team at Allegion in
                  Carmel, Indiana. After graduation this December, I'm looking
                  for a full-time software development position at an innovative
                  company where I can explore new technologies and grow as a
                  developer. <br />
                  <br />I made this website with React and Tailwind CSS,
                  deployed with Vercel. It's posted on my GitHub{" "}
                  <a
                    href="https://github.com/eemsley/evan.emsley.us"
                    className="text-sky-600 underline hover:text-sky-300 transition-all duration-500 ease-in-out"
                  >
                    here
                  </a>
                  . <br />
                  <br />
                  I'm always looking for new projects to work on, so feel free
                  to email me at{" "}
                  <a
                    className="text-sky-600 underline hover:text-sky-300 transition-all duration-500 ease-in-out"
                    href="mailto:evan@emsley.us"
                  >
                    evan@emsley.us
                  </a>
                </p>
              </div>
              <div className="w-1/6 mr-4 mb-8">
                <img
                  src={require("../assets/Headshot.jpeg")}
                  alt="headshot"
                  className="rounded-full hover:scale-125 duration-1000 shadow-lg shadow-slate-600"
                />
              </div>
            </div>
            <div className="w-full  flex flex-row justify-evenly max-w-5xl items-center space-x-2 mt-8 drop-shadow-2xl">
              {skills.map((skill) => (
                <p className="text-xs text-slate-100 p-2 bg-slate-600 rounded-full min-w-12 text-center hover:scale-110 transition-all duration-500 drop-shadow-xl">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div
          id="Projects"
          className="flex w-full flex-col justify-center items-center pt-12 mt-12"
        >
          <p className="text-4xl transition-all duration-1000 font-bold text-slate-600 pb-8">
            Projects
          </p>
          <div className="w-5/6 max-w-5xl flex flex-row flex-wrap">
            {projects.map((project) => (
              <div className=" w-1/2 aspect-square bg-slate-100 items-center justify-center flex flex-col p-4 border border-slate-600">
                <a href={project.link}>
                  <p className="text-3xl font-bold text-slate-600 pb-2">
                    {project.title}
                  </p>
                </a>
                <p className="text-base text-slate-600 pb-4 text-center">
                  {project.technologies.join(", ")}
                </p>
                <img
                  src={project.image}
                  alt="project"
                  className="w-3/4 hover:w-full transition-all duration-1000 mb-4 border-2 shadow-lg shadow-slate-600 border-slate-600"
                />
                <p className="text-sm text-slate-600 text-center">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          id="Resume"
          className="flex w-2/3 flex-col justify-center items-center pt-12 mt-12"
        >
          <p className="text-4xl font-bold text-slate-600 pb-4">Resume</p>
          <div className="w-full max-w-4xl h-screen flex flex-row flex-wrap">
            <embed
              src={require("../assets/resume.pdf")}
              type="application/pdf"
              width="100%"
              height="75%"
              title="resume"
            />
          </div>
        </div>
        <div
          id="About"
          className="flex w-3/4 flex-col justify-center items-center pt-12 pb-12 mt-12 bg-slate-200 rounded-lg"
        >
          <p className="text-4xl font-bold text-slate-600 pb-8">
            More About Me
          </p>

          <div className="w-2/3 flex flex-row flex-wrap">
            <img
              src={require("../assets/about1.jpg")}
              alt="about1"
              className="w-1/2 p-2 shadow-xl shadow-slate-600"
            />

            <img
              src={require("../assets/about3.JPG")}
              alt="about3"
              className="w-1/2 p-2 shadow-xl shadow-slate-600"
            />
            <p className="text-center text-slate-800 text-sm p-4">
              Outside of coding, I love to travel and play music. I've been on
              countless road trips around the US with my family and friends,
              camping and living out of a minivan. I've played guitar since
              middle school and have been a part of many bands. Most notably, my
              best friends in high school and I formed the band Arboretum, and
              we've recorded lots of original music available on our Spotify. I
              play guitar for Campus House Ministries at Purdue, and I'm a
              member of the Phi Delta Theta fraternity at Purdue. To stay active
              I enjoy lifting weights, running, and biking.
            </p>
            <img
              src={require("../assets/about5.JPG")}
              alt="about5"
              className="w-1/2 p-2 shadow-xl shadow-slate-600"
            />
            <img
              src={require("../assets/about4.JPG")}
              alt="about4"
              className="w-1/2 p-2 shadow-xl shadow-slate-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
