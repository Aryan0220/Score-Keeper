import Link from "next/link";

const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full flex flex-col justify-evenly text-center">
            <h1 className="text-4xl font-bold">ScoreKeeper</h1>
            {children}
        </div>
    )
}

export default AuthLayout;