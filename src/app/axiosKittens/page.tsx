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
          </Link>
        ))}
      </div>
    </>
  );
};

export default AxiosKittens;
