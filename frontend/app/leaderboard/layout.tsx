const LeaderBoardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-[100vh] flex flex-col justify-center">
            {children}
        </div>
    )
}

export default LeaderBoardLayout;