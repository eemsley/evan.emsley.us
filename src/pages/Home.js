import useScrollDirection from "../hooks/useScrollDirection";
import useScrollLocation from "../hooks/useScrollLocation";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { projects } from "../data/data.js";
import { useEffect, useState } from "react";

function Home() {
  let scrollDirection = useScrollDirection();

  useEffect(() => {
    setClicked(false);
  }, [scrollDirection]);
  const position = useScrollLocation();
  const [clicked, setClicked] = useState(false);
  return (
    <div className="h-full w-full">
      <div
        className={`sticky ${
          scrollDirection === "down" || clicked === true ? "-top-16" : "top-0"
        }  ${position === 0 ? "bg-slate-300" : "bg-slate-300/80"}
          h-16 transition-all duration-250 ease-in-out scroll-smooth`}
      >
        <div className="h-full w-full flex flex-row justify-center  text-slate-800 items-center">
          <div className="absolute left-4 w-1/4 flex p-4">
            <p className="text-xl px-1 rounded-lg italic">evan.emsley.us</p>
          </div>
          <div className="w-3/4 h-full justify-evenly items-center flex absolute right-0">
            <a href="#Home" onClick={() => setClicked(true)}>
              <div class="group  text-slate-800 transition-all duration-300 ease-in-out">
                <p class="  bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Home
                </p>
              </div>
            </a>
            <a href="#Projects" onClick={() => setClicked(true)}>
              <div class="group  text-slate-800 transition-all duration-300 ease-in-out">
                <p class="bg-left-bottom bg-gradient-to-r  from-slate-600  to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                  Projects
                </p>
              </div>
            </a>
            <a href="#Resume" onClick={() => setClicked(true)}>
              <div class="group  text-slate-800 transition-all duration-300 ease-in-out">
                <p class="bg-left-bottom bg-gradient-to-r  from-slate-600  to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Resume
                </p>
              </div>
            </a>
            <a href="#About" onClick={() => setClicked(true)}>
              <div class="group  text-slate-800 transition-all duration-300 ease-in-out">
                <p class="bg-left-bottom bg-gradient-to-r  from-slate-600  to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
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
            <p className="text-5xl transition-all duration-1000 font-bold text-slate-600 pb-6">
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
                  Within these digital walls, you will encounter a confluence of
                  my diverse interests and passions. From the mellifluous
                  strumming of guitar strings to the intricacies of computer
                  programming and machine learning, from the discipline of
                  physical fitness to the boundless exploration of global
                  destinations, and from the relentless pursuit of knowledge to
                  the embrace of emerging technologies — each facet of my
                  persona finds expression here. Enter this domain where the
                  artistry of music intertwines with the precision of code,
                  where physical vigor complements intellectual rigor, and where
                  curiosity drives discovery. Here, the journey encompasses the
                  synthesis of creativity and logic, resulting in a tapestry of
                  innovation and exploration. Whether you seek to immerse
                  yourself in the melodies that resonate from these strings,
                  delve into the depths of programming and machine learning,
                  draw inspiration for your fitness endeavors, or embark on a
                  virtual odyssey through the realms of technology — rest
                  assured, you have found a sanctuary amidst the digital
                  landscape.
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
          </div>
        </div>
        <div
          id="Projects"
          className="flex w-full flex-col justify-center items-center pt-12 mt-12"
        >
          <p className="text-5xl transition-all duration-1000 font-bold text-slate-600 pb-8">
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
          <p className="text-5xl transition-all duration-1000 font-bold text-slate-600 pb-4">
            Resume
          </p>
          <div className="w-full flex flex-row bg-red-100 flex-wrap">
            <div className=" w-1/2 aspect-square bg-slate-300"></div>
            <div className=" w-1/2 aspect-square bg-slate-500"></div>
            <div className=" w-1/2 aspect-square bg-slate-400"></div>
            <div className=" w-1/2 aspect-square bg-slate-200"></div>
            <div className=" w-1/2 aspect-square bg-slate-300"></div>
            <div className=" w-1/2 aspect-square bg-slate-600"></div>
          </div>
        </div>
        <div
          id="About"
          className="flex w-3/4 flex-col justify-center items-center pt-12 mt-12"
        >
          <p className="text-5xl transition-all duration-1000 font-bold text-slate-600 pb-4">
            More About Me
          </p>

          <div className="w-2/3 flex flex-row bg-red-100 flex-wrap">
            <div className=" w-1/4 aspect-square bg-slate-300"></div>
            <div className=" w-1/4 aspect-square bg-slate-500"></div>
            <div className=" w-1/4 aspect-square bg-slate-400"></div>
            <div className=" w-1/4 aspect-square bg-slate-800"></div>
            <div className=" w-1/4 aspect-square bg-slate-400"></div>
            <div className=" w-1/4 aspect-square bg-slate-600"></div>
            <div className=" w-1/4 aspect-square bg-slate-200"></div>
            <div className=" w-1/4 aspect-square bg-slate-400"></div>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-slate-300 flex flex-row justify-evenly text-white items-center">
        <InstagramIcon style={{ height: "75%", color: "#475569" }} />
        <LocalPhoneRoundedIcon style={{ height: "75%", color: "#475569" }} />
        <EmailRoundedIcon style={{ height: "75%", color: "#475569" }} />
      </div>
    </div>
  );
}
export default Home;
