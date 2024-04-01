export type TypeMenu = {
    link: string;
    name: string;
    isExternal?: boolean;
    isCurrent?: boolean;
};

export interface InterfaceNavbar {
    menus: TypeMenu[];
}