import React from "react";

function NavigationBar({ notes }) {
  return (
    <div className="flex flex-col w-[250px] max-w-[250px] py-2 px-1 border-r-2 h-full bg-white">
      <div className="w-10 h-10 bg-slate-500 rounded-full"></div>
      <p className="text-white">Name</p>
      <div className="flex flex-col w-full space-y-4">
        <div>
          <button className="w-full px-2 py-1 rounded-md font-bold text-amber-400 text-left">
            + Add note
          </button>
        </div>
        <div className="w-full space-y-3 ">
          <button className="text-left px-2 py-1 w-full ring-2 bg-amber-50 ring-amber-400 rounded-md hover:bg-slate-100 shadow-lg z-10 ">
            <p className="text-lg text-ellipsis whitespace-nowrap overflow-hidden w-full">
              Untitled
            </p>
            {/* <span className="font-thin">Jan 04, 2003</span> */}
          </button>
          <button className="text-left px-2 py-1 text-ellipsis whitespace-nowrap overflow-hidden w-full border-b">
            <p className=" text-ellipsis whitespace-nowrap overflow-hidden w-full">
              Untitled
            </p>
          </button>
          <button className="text-left  px-2 py-1 text-ellipsis whitespace-nowrap overflow-hidden w-full border-b">
            <p className=" text-ellipsis whitespace-nowrap overflow-hidden w-full">
              Untitled
            </p>
          </button>
          <button className="text-left  px-2 py-1 text-ellipsis whitespace-nowrap overflow-hidden w-full border-b">
            <p className=" text-ellipsis whitespace-nowrap overflow-hidden w-full">
              Untitled
            </p>
          </button>
          <button className="text-left  px-2 py-1 text-ellipsis whitespace-nowrap overflow-hidden w-full border-b">
            <p className=" text-ellipsis whitespace-nowrap overflow-hidden w-full">
              Untitled
            </p>
          </button>
          <button className="text-left px-2 py-1 text-ellipsis whitespace-nowrap overflow-hidden w-full border-b">
            <p className=" text-ellipsis whitespace-nowrap overflow-hidden w-full">
              Untitled
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
