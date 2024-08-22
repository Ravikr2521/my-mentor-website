"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const Loader = ({isLoading=false}) => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(0)
  }, [isLoading]);

  useEffect(() => {
    if (isLoading){
        setProgress(100);
    }else{
        setProgress(0)
    }
  }, [pathname]);


  return (
    <div className="">
      <LoadingBar
        color="#f11946"
        loaderSpeed={3000}
        transitionTime={3000}
        className="p-0"
        progress={progress}
        onLoaderFinished={() =>  setProgress(0)}
      />
    </div>
  );
};

export default Loader;
