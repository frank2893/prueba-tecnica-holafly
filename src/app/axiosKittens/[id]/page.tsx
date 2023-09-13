import { Breed, Calendar, Letter, Pin } from "@/app/components/icons/Icons";
import React from "react";

const AxiosKittens = () => {
  return (
    <>
      <div className="w-full mt-2 flex flex-row justify-center">
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[800px] rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
            src="https://dummyimage.com/800x430/5e917f/morbi-dictum.png&text=jsonplaceholder.org"
            alt="hola"
          />
          <div className="text-[24px] font-bold px-6 py-4">
            <p>lorem-ipsum</p>
          </div>
          <div className="text-base text-gray px-6 pb-8">
            <div className="flex flex-row w-full items-center">
              <Breed />
              <span className="ml-1 font-semibold text-[16px]">
                Breed:
              </span>{" "}
              <span className="ml-1 text-[14px] leading-[16px]">Mestiza</span>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-full items-center">
                <Calendar />
                <span className="ml-1 font-semibold text-[16px]">
                  Age:
                </span>{" "}
                <span className="ml-1 text-[14px] leading-[16px]">1 Año</span>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-full items-center">
                <Pin />
                <span className="ml-1 font-semibold text-[16px]">Addres:</span>
                <span className="ml-1 text-[14px] leading-[16px]">
                  AV 5 #1A-102 conjunto cerrado bilbao
                </span>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-full items-start">
                <Letter />
                <span className="ml-1 font-semibold text-[16px]">
                  Biografy:
                </span>
                <span className="ml-1 text-[14px] leading-[16px]">
                  Le gusta jugar con sus jugues, perseguir pajaros, comer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AxiosKittens;
