const LeaderBoardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-[100vh] flex flex-col justify-start">
            {children}
        </div>
    )
}

export default LeaderBoardLayout;