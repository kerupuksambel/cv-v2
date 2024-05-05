export type TypeMenu = {
    link: string;
    name: string;
    isExternal?: boolean;
    isCurrent?: boolean;
    onClick?: () => void;
};

export interface InterfaceNavbar {
    menus: TypeMenu[];
}