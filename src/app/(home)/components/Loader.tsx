import React from "react";
import BeatLoader from "react-spinners/ClipLoader";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
