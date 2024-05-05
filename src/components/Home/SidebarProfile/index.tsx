import { scrollToID } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { useState } from "react"

interface SidebarMenuT {
    name: string,
    id: string,
    isCurrent?: boolean
}

interface SidebarProfileT {
    openSidebar: boolean,
    setOpenSidebar: (a: boolean) => void
}


const menus: SidebarMenuT[] = [
    {
        name: "Experiences",
        id: "working-experiences",
    },
    {
        name: "Educations",
        id: "educations",
    },
    {
        name: "Projects",
        id: "project-experiences",
    },
]


const SidebarProfile  = ({openSidebar, setOpenSidebar}: SidebarProfileT) => {
    const [activeMenu, changeActiveMenu] = useState<number|null>(null);
    const handleClick = (menu: SidebarMenuT) => {
        scrollToID(menu.id);
        changeActiveMenu(menus.indexOf(menu));
    }

    return (
        <div className={`bg-primary text-white h-[100vh] text-center flex flex-wrap justify-center items-center uppercase tracking-wider`}>
            <div className="flex flex-wrap justify-center items-center gap-y-6 w-full">
            {
                menus.map((menu, idx) => (
                    <div key={idx} className="w-full">
                        <div className={`font-header hover:cursor-pointer ${activeMenu === idx ? "font-bold" : ""}`} onClick={() => handleClick(menu)}>{menu.name}</div>
                    </div>
                ))
            }
            </div>
            <div className="w-[48px] h-[48px] rounded-full bg-white text-primary text-2xl flex justify-center items-center hover:cursor-pointer" onClick={() => setOpenSidebar(false)}>
                <Icon icon="mdi:chevron-left"/>
            </div>
        </div>
    )
}

export default SidebarProfile;