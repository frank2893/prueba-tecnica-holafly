import { getItemKitten } from "@/api/kittens";
import { Breed, Calendar, Letter, Pin } from "@/app/components/icons/Icons";
import React from "react";

const AxiosKittens = async ({ params }) => {
  const { id } = params;
  const data = await getItemKitten(id);
  return (
    <>
      {data && (
        <div className="w-full mt-2 flex flex-row justify-center">
          <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[800px] rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
              src={data.image}
              alt={data.category}
            />
            <div className="text-[24px] font-bold px-6 py-4">
              <p>{data.slug}</p>
            </div>
            <div className="text-base text-gray px-6 pb-8">
              <div className="flex flex-row w-full items-center">
                <Breed />
                <span className="ml-1 font-semibold text-[16px]">
                  Breed:
                </span>{" "}
                <span className="ml-1 text-[14px] leading-[16px]">
                  {data.lorem}
                </span>
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
                  <span className="ml-1 font-semibold text-[16px]">
                    Addres:
                  </span>
                  <span className="ml-1 text-[14px] leading-[16px]">
                    Calle 1 AV 1
                  </span>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="flex flex-row w-full items-start md:items-center">
                  <Letter />
                  <span className="ml-1 font-semibold text-[16px]">
                    Biografy:
                  </span>
                  <span className="ml-1 text-[14px] leading-[16px] text-justify">
                    Le gusta jugar con sus jugues, perseguir pajaros, comer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AxiosKittens;
