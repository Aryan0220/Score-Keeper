import { PackagePlus } from "lucide-react";
import { Card } from "./_components/card";

const list_of_users = [
    {
        "rank": 1,
        "name": "Alice Johnson",
        "score": 4500
    },
    {
        "rank": 2,
        "name": "Bob Smith",
        "score": 4320
    },
    {
        "rank": 3,
        "name": "Charlie Brown",
        "score": 4200
    },
    {
        "rank": 4,
        "name": "David Williams",
        "score": 4100
    },
    {
        "rank": 5,
        "name": "Evelyn Clark",
        "score": 3985
    },
    {
        "rank": 6,
        "name": "Frank Miller",
        "score": 3950
    },
    {
        "rank": 7,
        "name": "Grace Lee",
        "score": 3820
    },
    {
        "rank": 8,
        "name": "Hannah Scott",
        "score": 3780
    },
    {
        "rank": 9,
        "name": "Isaac Turner",
        "score": 3675
    },
    {
        "rank": 10,
        "name": "Julia Baker",
        "score": 3600
    },
    {
        "rank": 11,
        "name": "Kevin Adams",
        "score": 3520
    },
    {
        "rank": 12,
        "name": "Laura Davis",
        "score": 3495
    },
    {
        "rank": 13,
        "name": "Michael White",
        "score": 3400
    },
    {
        "rank": 14,
        "name": "Nina Thompson",
        "score": 3380
    },
    {
        "rank": 15,
        "name": "Oliver Perez",
        "score": 3300
    },
    {
        "rank": 16,
        "name": "Paula Martinez",
        "score": 3220
    },
    {
        "rank": 17,
        "name": "Quincy Hall",
        "score": 3150
    },
    {
        "rank": 18,
        "name": "Rachel Young",
        "score": 3085
    },
    {
        "rank": 19,
        "name": "Samuel King",
        "score": 3000
    },
    {
        "rank": 20,
        "name": "Tina Lewis",
        "score": 2900
    }
];


const LeaderBoard = () => {
    return (
        <div className="h-full flex flex-col items-center justify-start pt-20">
            <h1 className="text-4xl font-bold text-secondary font-mono pb-4">
                Leaderboard
            </h1>
            <div className="w-3/4 md:w-1/2 flex pb-2 justify-between text-xl text-secondary font-semibold">
                <p className="lg:pl-8">Rank</p>
                <p>Username</p>
                <p className="lg:pr-12">Score</p>
            </div>
            <div className="flex no-scrollbar h-[78%] w-3/4 gap-3 md:w-1/2 rounded-lg flex-col items-center overflow-scroll mx-2">
                {list_of_users.map((user) => (
                    <Card 
                    key={user.rank}
                    rank={user.rank}
                    name={user.name}
                    score={user.score}
                />
                ) )}
            </div>
        </div>
    )
}

export default LeaderBoard;