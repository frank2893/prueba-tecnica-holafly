import React from "react";
import { Search } from "../components/icons/Icons";

const Seach = () => {
  return (
    <div className="flex flex-wrap justify-center h-[500px]">
      <div className="flex flex-col justify-center items-center">
        <div>
          <Search className="h-10 w-10" />
        </div>
        <div>
          <span className="text-xl">Proximamente</span>
        </div>
      </div>
    </div>
  );
};

export default Seach;
