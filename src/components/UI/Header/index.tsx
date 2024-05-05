interface IProps {
    token?: string,
    children?: React.ReactNode
}

export const Header: React.FC<IProps> = ({token, children}) => {
    if(!token) token = "";
    return (
        <h1 className="text-3xl font-bold w-full text-center py-4 font-header">{children}</h1>
    )
}