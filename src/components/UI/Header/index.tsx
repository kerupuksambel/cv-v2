interface IProps {
    className?: string,
    children?: React.ReactNode
}

export const Header: React.FC<IProps> = ({className, children}) => {
    if(!className){className = ''}
    return (
        <h1 className={`text-3xl font-bold w-full text-center py-4 font-header ${className}`}>{children}</h1>
    )
}