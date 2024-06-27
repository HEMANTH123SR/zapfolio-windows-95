"use client";
import Image from "next/image";
import { useState } from "react";
import { DesktopIcon } from "@/app/components/DesktopIcon";
import { getCurrentTime } from "@/app/utils/getTime";

export const Windows95TaskBar = () => {
  const [taskBarOpen, setTaskBarOpen] = useState(false);
  return (
    <div className="flex flex-col w-full z-20">
      <div
        className={` ${taskBarOpen ? "block" : "hidden"
          } h-auto w-auto bg-[#C3C3C3] absolute bottom-[40px] flex border-2 border-l-white border-t-white border-r-slate-700 border-b-slate-700 `}
        style={{
          borderRightStyle: "double",
          borderBottomStyle: "double",
          boxShadow: "1px 0px #000000",
        }}
      >
        <div
          className="w-10 text-2xl bg-[#7B7D7B] text-[#c3c3c3] font-bold flex justify-start py-4 items-center"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            transformOrigin: "center",
          }}
        >
          Windows <span className="text-white ">95</span>
        </div>

        <div className="flex flex-col w-full">
          {/* <DesktopIcon
            imageSrc="/webpolio.jpeg"
            title="webpolio"
            imgClass="rounded-md"
            isSmall={true}
            containerClass="px-3 py-1.5 hover:bg-blue-900 hover:text-white"
          /> */}
          
          <DesktopIcon
            imageSrc="/linkedin.webp"
            title="linkedin"
            imgClass="rounded-md"
            isSmall={true}
            containerClass="px-3 py-1.5 hover:bg-blue-900 hover:text-white"
          />
          <div className="border border-black"></div>
          <DesktopIcon
            imageSrc="/camera.png"
            title="camera"
            isSmall={true}
            containerClass="px-3 py-1.5 hover:bg-blue-900 hover:text-white"
          />
          <DesktopIcon
            imageSrc="/internet.png"
            title="intenet"
            isSmall={true}
            containerClass="px-3 py-1.5 hover:bg-blue-900 hover:text-white"
          />
          <DesktopIcon
            imageSrc="/pc.png"
            title="biography"
            isSmall={true}
            containerClass="px-3 py-1.5 hover:bg-blue-900 hover:text-white"
          />
        </div>
      </div>

      <div className="w-full h-[40px]  border-t-2 border-white bg-[#C0C0C0] flex justify-between items-center p-2">
        <div className="flex ">
        <div className="flex space-x-5 ">
          <div
            className="h-full flex justify-center items-center space-x-0.5 border-2 border-l-white border-t-white border-r-slate-700 border-b-slate-700 px-2.5  cursor-pointer"
            style={{ boxShadow: "2px 2px #000000" }}
            onClick={() => setTaskBarOpen((prev) => !prev)}
          >
            <Image
              src={"/windows95logo.png"}
              alt={"internet"}
              width={20}
              height={20}
            />
            <span className="text-sm font-semibold">Start</span>
          </div>
        </div>



        </div>
        <div
          className="h-full  text-xs px-2  py-1 bg-[#C4C2C5] font-semibold  "
          style={{
            borderLeft: "2px solid #153448",
            borderRight: "2px solid white",
            borderTop: "2px solid #153448",
            borderBottom: "2px solid white",
          }}
        >
          {getCurrentTime()}
        </div>
      </div>
    </div>
  );
};
