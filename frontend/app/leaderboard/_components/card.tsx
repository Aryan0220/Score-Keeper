interface CardProps {
    rank: number;
    name: string;
    score: number;
}

export const Card = ({
    rank,
    name,
    score,
}:CardProps) => {
    return (
        <div className="w-full bg-popover rounded-lg flex lg:py-4 py-2 text-lg justify-between">
            <p className="pl-4 lg:pl-12 ">{rank}</p>
            <p>{name}</p>
            <p className="pr-4 lg:pr-12">{score}</p>
        </div>
    )
}

