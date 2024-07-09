
import { UserDetailedObjectType } from "@/lib/types";
import { UserComponent } from "@/app/components/section/user-section"
const Windows95Theme = async ({ params }: { params: { userId: string } }) => {
    const userDataResponse = await fetch(
        `https://www.zapfolio.in/api/get-user-data?userId=${params.userId}`
    );

    const userData = await userDataResponse.json();
    console.log(params, "params object");  // Log the entire params object for debugging
    console.log(userData);
    if (userData.success) {
        const {
            linkedinUserData: user,
        }: { linkedinUserData: UserDetailedObjectType } = userData.data;
        return (
            <UserComponent user={user} />
        )
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


export default Windows95Theme;