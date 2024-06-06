import { SocialMedia } from "../types";
import SocialMedias from "./SocialMedias";

const Footer = () => {
    const socialMedias: SocialMedia[] = [
        {
            "name": "Facebook",
            "icon": "mdi:facebook",
            "link": "https://facebook.com/ammaralifian"
        },
        {
            "name": "Github",
            "icon": "mdi:github",
            "link": "https://github.com/kerupuksambel"
        },
        {
            "name": "Upwork",
            "icon": "simple-icons:upwork",
            "link": "https://github.com/kerupuksambel"
        },
        {
            "name": "LinkedIn",
            "icon": "mdi:linkedin",
            "link": "https://github.com/kerupuksambel"
        },
        {
            "name": "Stack Overflow",
            "icon": "mdi:stack-overflow",
            "link": "https://github.com/kerupuksambel"
        },
    ]

    return (
        <div className="h-[100px] w-full bg-primary z-10 p-3 flex flex-wrap content-center ">
            {/* <Header>
                <span className="text-white">Contact Me</span>
            </Header> */}
            <SocialMedias socialMedia={socialMedias}/>
        </div>
    )
}

export default Footer;