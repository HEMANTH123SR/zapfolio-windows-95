"use client";
import React, { useState, useEffect } from "react";
import { UserDetailedObjectType, ComponentsToShowType } from "@/lib/types";
import { UserComponent } from "@/app/components/section/user-section";
const Twitter = ({ params }: { params: { userid: string } }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<UserDetailedObjectType | null>(null);
    const [componentsToShow, setComponentsToShow] =
        useState<ComponentsToShowType>({
            summary: true,
            headline: true,
            geo: true,
            languages: true,
            educations: true,
            position: true,
            skills: true,
            courses: true,
            certifications: true,
            projects: true,
            resume: true,
        });

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const userDataResponse = await fetch(
                `/api?id=${params.userid}`
            );
            const userData = await userDataResponse.json();
            console.log("user data", userData);
            if (userData.success) {
                setUser(userData.data.linkedinUserData);
                setComponentsToShow(userData.data.themesData.windows95.componentsToShow);
            }
            setIsLoading(false);
        })();
    }, [params.userid]);

    if (!isLoading) {
        if (user) {
            return <UserComponent user={user} componentsToShow={componentsToShow} />;
        }
        return (
            <main className="flex flex-col w-screen h-screen bg-white justify-center items-center">
                <h1 className="text-6xl font-semibold">404</h1>
                <span className="text-xs font-semibold font-sans">
                    something went wrong
                </span>
            </main>
        );
    }
    return (
        <main className="flex flex-col w-screen h-screen bg-white justify-center items-center">
            <span className="text-xs font-semibold font-sans">loading</span>
        </main>
    );
};

export default Twitter;