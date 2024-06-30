import React from "react";

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let errorStatus = outputDetails?.error;

    if (errorStatus === 1) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {outputDetails?.compile_message}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {outputDetails.output !== null
            ? `${outputDetails.output}`
            : null}
        </pre>
      );
    } 
  };
  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1>
      <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </>
  );
};

export default OutputWindow;
