import { getKittens } from "@/api/kittens";
import Link from "next/link";
import React from "react";
import ContentList from "../components/common/ContentList";

const AxiosKittens = async () => {
  const data = await getKittens();

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {data.slice(0, 20).map((item: any) => (
          <Link href={`/axiosKittens/${item.id}`} key={item.id}>
            <ContentList
              name={item.title}
              description={item.slug}
              urlImg={item.thumbnail}
            />
            {/* <div className="w-[200px] m-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={item.thumbnail} alt={item.title} />
                <div className="text-lg font-bold px-6 py-4">
                  <p>{item.slug}</p>
                </div>
                <div className="text-base text-gray px-6 pb-2">
                  <p className="truncate block">{item.title}</p>
                </div>
              </div>
            </div> */}
          </Link>
        ))}
      </div>
    </>
  );
};

export default AxiosKittens;
