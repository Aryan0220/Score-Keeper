import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col text-center justify-center items-center">
      <h3 className="text-secondary text-xl font-bold">
        Welcome to
      </h3>
      <h1 className="text-4xl px-3 font-bold italic font-serif">
        ScoreKeeper!
      </h1>
      <p className="text-lg text-slate-50/65">
        Feel the Competition
      </p>
      <Button className="mt-6" variant="default">
        <Link className="text-lg py-4" href="/leaderboard">
          Go to LeaderBoard
        </Link>
      </Button>
    </div>
  );
}
