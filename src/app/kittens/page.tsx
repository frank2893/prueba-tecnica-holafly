import React from "react";
import kittesData from "../mockData/kittens.json";
import Link from "next/link";
import ContentList from "../components/common/ContentList";

const kittens = () => {
  let data: any = kittesData.data;
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {data.map((item: any) => (
          <Link href={`/kittens/${item.id}`} key={item.id}>
            <ContentList
              name={item.name}
              description={item.description}
              urlImg={`/images/${item.imageFileName}`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default kittens;
