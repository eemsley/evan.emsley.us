function Home() {
  return (
    <div className="h-full w-full p-4 mt-28 items-center flex flex-col">
      <div className="flex w-3/4 flex-col justify-center items-center">
        <p className="text-5xl hover:text-6xl transition-all duration-1000 font-bold text-slate-600 pb-6">
          Welcome!
        </p>
        <p className="text-xl/tight text-slate-600">
          I'm a Purdue Computer Science student, graduating in December 2024.
        </p>
        <p className="text-xl/tight text-slate-600 pb-8">
          Below is an overview of my skills, projects, and passions...
        </p>
        <div className="w-full flex flex-row">
          <div className="w-2/3">
            <p className=" text-sm/normal text-slate-600 pr-2">
              Within these digital walls, you will encounter a confluence of my
              diverse interests and passions. From the mellifluous strumming of
              guitar strings to the intricacies of computer programming and
              machine learning, from the discipline of physical fitness to the
              boundless exploration of global destinations, and from the
              relentless pursuit of knowledge to the embrace of emerging
              technologies — each facet of my persona finds expression here.
              Enter this domain where the artistry of music intertwines with the
              precision of code, where physical vigor complements intellectual
              rigor, and where curiosity drives discovery. Here, the journey
              encompasses the synthesis of creativity and logic, resulting in a
              tapestry of innovation and exploration. Whether you seek to
              immerse yourself in the melodies that resonate from these strings,
              delve into the depths of programming and machine learning, draw
              inspiration for your fitness endeavors, or embark on a virtual
              odyssey through the realms of technology — rest assured, you have
              found a sanctuary amidst the digital landscape.
            </p>
          </div>
          <div className="w-1/3">
            <img src={require("../assets/Headshot.png")} alt="ronald" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center items-center mt-24">
        <p className="text-5xl hover:text-6xl transition-all duration-1000 font-bold text-slate-600 pb-4">
          Projects
        </p>
        <div className="w-3/4 flex flex-row bg-red-100 flex-wrap">
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
      <div className="flex w-2/3 flex-col justify-center items-center mt-24">
        <p className="text-5xl hover:text-6xl transition-all duration-1000 font-bold text-slate-600 pb-4">
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
      <div className="flex w-3/4 flex-col justify-center items-center mt-24">
        <p className="text-5xl hover:text-6xl transition-all duration-1000 font-bold text-slate-600 pb-4">
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
  );
}
export default Home;
