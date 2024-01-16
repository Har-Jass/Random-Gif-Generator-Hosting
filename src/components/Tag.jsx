import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("DILJIT DOSANJH");
  const {loading,gif,fetchData} = useGif(tag);
  
  return (
    <div className="flex flex-col items-center bg-green-950 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
      <h2 className="uppercase font-bold text-2xl underline text-white">
        {tag} gif's
      </h2>
      {loading ? <Spinner /> : <img src={gif} width="450" alt="tag_gif"/>}

      <div className="flex flex-col items-center gap-y-3 w-full">
        <input
          type="text"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          className="uppercase bg-[#F0F0F0] w-9/12 rounded-lg font-normal py-[5px] text-sm text-center"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setTag(event.target.value);
              fetchData(tag);
            }
          }}
        />

        <button
          onClick={() => fetchData(tag)}
          className="uppercase bg-[#F0F0F0] w-10/12 rounded-lg font-normal py-2 text-xl"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Tag;