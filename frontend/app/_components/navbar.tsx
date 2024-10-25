import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="absolute top-0 w-full">
            <nav className=" flex justify-around py-2 bg-card">
            <Link href="/" className="text-3xl font-serif italic">ScoreKeeper</Link>
            <Button variant="secondary">
                <Link className="font-bold" href="/sign-in">Login</Link>
            </Button>
            </nav>
        </div>
    )
}

export default Navbar;