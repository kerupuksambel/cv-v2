// import { Icon } from "@iconify/react/dist/iconify.js";

const Profile = () => {
    return (
        <div id="profile" className="w-full bg-primary text-white h-[100vh] flex flex-wrap justify-center items-center">
            <div className="flex items-center content-center justify-center flex-wrap w-1/2 space-y-10">
                <div className="w-full">
                    <div className="text-5xl font-bold pt-3 font-header leading-snug">Ammar Alifian Fahdan</div>
                    <div className="text-2xl pt-3">Full Stack Web Developer</div>
                </div>
                <div className="w-full">
                    <a href="/resume" target="_blank" className="inline-flex w-auto p-5 bg-primary text-white border-white border-4 hover:border-white hover:bg-white hover:text-primary transition-colors duration-500 font-bold">Download Full Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Profile;