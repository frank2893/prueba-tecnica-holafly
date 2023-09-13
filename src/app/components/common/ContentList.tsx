import React from 'react'

interface Props {
  name: string;
  description: string;
  urlImg: string;
}

const ContentList = ({ name, description, urlImg }: Props) => {
  return (
    <>
      <div className="w-[200px] m-2">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img src={urlImg} alt={name} />
          <div className="text-lg font-bold px-4 pt-2">
            <p>{name}</p>
          </div>
          <div className="text-base text-gray px-4 pb-6">
            <p className="truncate block">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentList