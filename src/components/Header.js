import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-full w-full flex flex-row justify-center  text-slate-600 items-center">
      <div className="absolute left-0 w-1/4 flex p-4">
        <p className="text-2xl px-1 shadow-md shadow-slate-600 rounded-lg bg-slate-200">
          Evan Emsley
        </p>
      </div>

      <div className="w-3/4 h-full justify-evenly items-center flex absolute right-0">
        <Link to="/">
          <div class="group  text-slate-600 transition-all duration-300 ease-in-out">
            <p class="  bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Home
            </p>
          </div>
        </Link>
        <Link to="/rush">
          <div class="group  text-slate-600 transition-all duration-300 ease-in-out">
            <p class="bg-left-bottom bg-gradient-to-r  from-slate-600  to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
              Projects
            </p>
          </div>
        </Link>
        <Link to="/about">
          <div class="group  text-slate-600 transition-all duration-300 ease-in-out">
            <p class="bg-left-bottom bg-gradient-to-r  from-slate-600  to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Resume
            </p>
          </div>
        </Link>
        <Link to="/gallery">
          <div class="group  text-slate-600 transition-all duration-300 ease-in-out">
            <p class="bg-left-bottom bg-gradient-to-r  from-slate-600  to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
