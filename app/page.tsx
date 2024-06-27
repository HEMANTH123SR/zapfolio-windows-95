"use client";
import { FaRegWindowMinimize } from "react-icons/fa6";

import { BiWindow } from "react-icons/bi";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { DesktopIcon } from "@/app/components/DesktopIcon";
import { Windows95TaskBar } from "@/app/components/Windows95Taskbar";
import { X, Minus, Square } from "lucide-react";

export default function Home() {
  const [maximizeBiographyWindow, setMaximizeBiographyWindow] = useState<boolean>(false)
  const [closeBiographyWindow, setCloseBiographyWindow] = useState<boolean>(false);
  const [open, cycleOpen] = useCycle(true, false);
  const constraintsRef = useRef(null);

  return (
    <motion.div className="h-screen max-h-screen w-[100%] flex flex-col bg-[#018281]  custom-cursor">
      {open && (
        <motion.div
          ref={constraintsRef}
          className={`${open ? "block" : "hidden"
            } absolute z-10 w-screen h-screen overflow-hidden`}
        >
          <motion.div
            drag
            dragMomentum={false}
            dragConstraints={constraintsRef}
            className={`${maximizeBiographyWindow ? "h-screen w-full" : " h-[400px] w-10/12 md:w-[600px]"}  bg-[#C0C0C0] p-0.5`}
            style={{
              borderLeft: "2px solid white",
              borderTop: "2px solid white",
              borderRight: "2px solid #5A5A5A",
              borderBottom: "2px solid #5A5A5A",
              boxShadow: "0.5px 0.5px #000000",
            }}
          >
            <div className=" flex justify-between items-center px-3 py-1 w-full bg-[#00007C]">
              <div className="flex justify-center items-center space-x-2 ">
                <Image src={"/pc.png"} alt="pc" width={20} height={20} />
                <span className="text-white">Biography</span>
              </div>
              <div className="flex text-black">

                <div
                  className="p-[1px] bg-[#C0C0C0] flex justify-center items-center cursor-pointer  border-r-2 border-black"
                  style={{ boxShadow: "0.5px 0.5px #000000" }}
                >
                  <BiWindow className="h-4 w-4"
                    onClick={() => setMaximizeBiographyWindow(prev => !prev)}
                  />
                </div>
                <div
                  className="p-[1px] bg-[#C0C0C0] flex justify-center items-center cursor-pointer "
                  style={{ boxShadow: "0.5px 0.5px #000000" }}
                >
                  <X className="h-4 w-4" strokeWidth={2.5}
                    onClick={() => cycleOpen()}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      <div className="w-full flex flex-col space-y-7 h-full p-6 pb-0 text-white overflow-hidden ">
        <div className="flex space-x-8">
          <DesktopIcon
            title="biography"
            imageSrc="/pc.png"
            containerClass="flex-col"
            handleClick={() => cycleOpen()}
          />
          <DesktopIcon
            title="camera"
            imageSrc="/camera.png"
            containerClass="flex-col"
          />
        </div>
        <div className="flex space-x-8">
          <DesktopIcon
            title="resume"
            imageSrc="/files.png"
            containerClass="flex-col"
          />

          <DesktopIcon
            title="webpol."
            imageSrc="/files.png"
            containerClass="flex-col"
          />
        </div>
        <div className="flex space-x-8">
          <DesktopIcon
            title="internet"
            imageSrc="/internet.png"
            containerClass="flex-col"
          />
          <DesktopIcon
            title="cmd(st)"
            imageSrc="/cmd.png"
            containerClass="flex-col"
          />
        </div>
        <DesktopIcon
          title="photo"
          imageSrc="/picture.png"
          containerClass="flex-col"
        />

        <DesktopIcon
          title="mynote"
          imageSrc="/notepad.png"
          containerClass="flex-col"
        />
      </div>
      <Windows95TaskBar />
    </motion.div>
  );
}
