"use client";
import Link from 'next/link';
import {Button} from "@/components/ui/button";

const ErrorPage = () => {
    return (
        <div>
            <p>Something went wrong.</p>
            <Button variant="secondary" asChild>
                <Link href="/" className='text-lg'>
                    Go back home
                </Link>
            </Button>
        </div>
    )
}

export default ErrorPage;