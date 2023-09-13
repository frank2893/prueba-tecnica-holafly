import { Breed, Calendar } from "@/app/components/icons/Icons";
import kittesData from "../../mockData/kittens.json";
import React from "react";

const Kitten = ({ params }) => {
  const { id } = params;
  let data: any[] = kittesData.data;

  let filteData = data.find((i: any) => i.id === Number(id));

  return (
    <>
      <div className="w-full mt-2 flex flex-row justify-center">
        <div className="w-full xss:w-[400px] sm:w-[500px] md:w-[500px] lg:w-[700px] rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[600px]"
            src={`/images/${filteData.imageFileName}`}
            alt="hola"
          />
          <div className="text-[24px] font-bold px-6 py-4">
            <p>{filteData.name}</p>
          </div>
          <div className="px-6 pb-4">
            <p className="ml-1 text-[14px] leading-[16px] text-justify">
              {filteData.description}
            </p>
          </div>
          <div className="text-base text-gray px-6 pb-8">
            <div className="flex flex-row w-full items-center">
              <Breed />
              <span className="ml-1 font-semibold text-[16px]">
                Gender:
              </span>{" "}
              <span className="ml-1 text-[14px] leading-[16px]">
                {filteData.gender}
              </span>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-full items-center">
                <Calendar />
                <span className="ml-1 font-semibold text-[16px]">
                  Age:
                </span>{" "}
                <span className="ml-1 text-[14px] leading-[16px]">
                  {filteData.age}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kitten;
