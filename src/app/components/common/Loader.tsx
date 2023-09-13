import React from 'react'

const Loader = () => {
  return (
    <div className="border shadow rounded-md p-4 max-w-sm lg:max-w-[700px] w-full mx-auto min-h-screen flex flex-col">
      <div className="animate-pulse flex flex-col items-center space-x-4">
        <div className="rounded bg-slate-200 h-[10rem] lg:h-[20rem] w-full"></div>
        <div className="flex-1 space-y-6 py-1 w-full">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader