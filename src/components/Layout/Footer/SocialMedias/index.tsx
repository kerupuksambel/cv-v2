import { Icon } from "@iconify/react/dist/iconify.js"
import { SocialMedia } from "../../types"

interface SocialMediaT {
    socialMedia: SocialMedia[]
}

const SocialMedias = ({socialMedia}: SocialMediaT) => {
    return (
        <div className="w-full flex flex-wrap justify-center items-center space-x-4">
            {
                socialMedia.map((sm) => (
                    <a href={sm.link} target="_blank" className="text-3xl text-white" key={sm.name}>
                        <Icon icon={sm.icon} className="w-full h-full"/>
                    </a>
                ))
            }
        </div>
    )
}

export default SocialMedias

