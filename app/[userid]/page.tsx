"use client";
import { BiWindow } from "react-icons/bi";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { DesktopIcon } from "@/app/components/DesktopIcon";
import { Windows95TaskBar } from "@/app/components/Windows95Taskbar";
import { X } from "lucide-react";
import { userDetailedObject } from "@/lib/test-data";
import Link from "next/link";
export default function Home({ params }: { params: { userId: string } }) {
    const user = userDetailedObject[0];
    const [maximizeBiographyWindow, setMaximizeBiographyWindow] =
        useState<boolean>(false);
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
                        className={`${maximizeBiographyWindow
                            ? "h-screen w-full"
                            : " h-[500px] w-10/12 md:w-[600px]"
                            }  bg-[#C0C0C0] p-0.5`}
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
                                    <BiWindow
                                        className="h-4 w-4"
                                        onClick={() => setMaximizeBiographyWindow((prev) => !prev)}
                                    />
                                </div>
                                <div
                                    className="p-[1px] bg-[#C0C0C0] flex justify-center items-center cursor-pointer "
                                    style={{ boxShadow: "0.5px 0.5px #000000" }}
                                >
                                    <X
                                        className="h-4 w-4"
                                        strokeWidth={2.5}
                                        onClick={() => cycleOpen()}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-3 px-8 py-6 h-[93%] mt-1  overflow-y-scroll">
                            <img
                                src={user.profilePicture}
                                className="w-1/3 max-w-40 min-w-24 h-auto border-2"
                            />
                            <h1 className="font-semibold text-xl capitalize underline">
                                {user.firstName + " " + user.lastName}
                            </h1>
                            <p className="text-sm text-[#5E6772] lowercase">
                                {user.headline}
                            </p>

                            {user.geo.country && (
                                <span className="text-sm text-[#5E6772] ">
                                    {user.geo.country + " " + user.geo.city + "📍"}
                                </span>
                            )}

                            {user.summary && (
                                <div className="flex flex-col space-y-3">
                                    <h2 className="font-semibold text-xl underline">About Me</h2>
                                    <p className="text-sm">{user.summary}</p>
                                </div>
                            )}

                            <div className="flex space-x-3">
                                <Link
                                    href={`https://www.linkedin.com/in/${user.username}`}
                                    className="rounded-sm bg-[#0A66C2] text-white px-2.5 pt-0.5"
                                >
                                    Linkedin
                                </Link>
                                <Link
                                    href={`https://www.zapfolio.in`}
                                    className="rounded-sm bg-[#FF560E] text-white px-2.5 pt-0.5"
                                >
                                    Zapfolio
                                </Link>
                            </div>

                            {user.position && (
                                <div className="flex flex-col space-y-3">
                                    <h2 className="font-semibold text-xl underline mb-3 mt-8">
                                        Industry Experience
                                    </h2>
                                    {user.position.map((position, index) => (
                                        <div className="flex flex-col space-y-2" key={index}>
                                            <h3 className="font-semibold text-sm">
                                                {position.title}
                                            </h3>
                                            <p className="text-xs text-[#5E6772]">
                                                {position.companyName}
                                            </p>
                                            <p className="text-xs text-[#5E6772]">
                                                {position.location}
                                            </p>
                                            <p className="text-xs text-[#5E6772]">
                                                {position.start.year} - {position.end.year}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {user.projects && (
                                <div className="flex flex-col space-y-3">
                                    <h2 className="font-semibold text-xl underline mb-3 mt-8">
                                        Projects
                                    </h2>
                                    {user.projects.map((project, index) => (
                                        <div key={index} className="flex flex-col space-y-2">
                                            <h3 className="font-semibold text-sm">{project.title}</h3>
                                            <p className="text-sm text-[#5E6772]">
                                                {project.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {user.educations && (
                                <div className="flex flex-col space-y-3">
                                    <h2 className="font-semibold text-xl underline mb-3 mt-8">
                                        Education
                                    </h2>
                                    {user.educations.map((education, index) => (
                                        <div className="flex flex-col space-y-2" key={index}>
                                            <h3 className="font-semibold text-sm">
                                                {education.schoolName}
                                            </h3>
                                            <p className="text-xs text-[#5E6772]">
                                                {education.degree}
                                            </p>
                                            {education.fieldOfStudy && (
                                                <p className="text-xs text-[#5E6772]">
                                                    Field Of Study {education.fieldOfStudy}
                                                </p>
                                            )}
                                            {education.description && (
                                                <p className="text-xs text-[#5E6772]">
                                                    {education.description}
                                                </p>
                                            )}
                                            <p className="text-xs text-[#5E6772]">
                                                {education.start.year} - {education.end.year}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {user.certifications && (
                                <div className="flex flex-col space-y-3">
                                    <h2 className="font-semibold text-xl underline mb-3 mt-8">
                                        Certs
                                    </h2>
                                    {user.certifications.map((cert, index) => (
                                        <div className="flex flex-col space-y-2" key={index}>
                                            <h3 className="font-semibold text-sm">
                                                {cert.authority}
                                            </h3>
                                            <p className="text-xs text-[#5E6772]">{cert.name}</p>
                                            <p className="text-xs text-[#5E6772]">
                                                {cert.start.year}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {user.skills && (
                                <div className="flex flex-col space-y-3">
                                    <h2 className="font-semibold text-xl underline mb-3 mt-8">
                                        Certs
                                    </h2>
                                    {user.skills.map((skill, index) => (
                                        <h5 className="font-medium text-sm" key={index}>
                                            ●<span className="pl-2">{skill}</span>
                                        </h5>
                                    ))}
                                </div>
                            )}

                            {user.languages && (
                                <div className="flex flex-col space-y-3">
                                    <h2 className="font-semibold text-xl underline mb-3 mt-8">
                                        Languages
                                    </h2>
                                    <div className="flex space-x-4 flex-wrap">
                                        {user.languages.map((lanq, index) => (
                                            <h5 key={index} className="font-medium text-sm">
                                                {lanq.name}
                                            </h5>
                                        ))}
                                    </div>
                                </div>
                            )}


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
                        title="zapfolio"
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
