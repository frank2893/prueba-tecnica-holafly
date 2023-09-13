import React from "react";
import kittesData from "../mockData/kittens.json";
import Link from "next/link";

const kittens = () => {
  let data: any = kittesData.data;
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {data.map((item: any) => (
          <Link href={`/kittens/${item.id}`} key={item.id}>
            <div className="w-[200px] m-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={`/images/${item.imageFileName}`} alt={item.name} />
                <div className="text-lg font-bold px-4 pt-2">
                  <p>{item.name}</p>
                </div>
                <div className="text-base text-gray px-4 pb-6">
                  <p className="truncate block">{item.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default kittens;
