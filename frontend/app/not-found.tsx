import Link from 'next/link';
import {Button} from "@/components/ui/button";

const NotFoundPage = () => {
    return (
        <div className='h-[100vh] flex flex-col space-y-4 px-2 items-center justify-center'>
            <h1 className='text-2xl text-center'>Can&apos;t find the page you are looking for.</h1>
            <Button variant="secondary" asChild>
                <Link href="/" className='text-lg'>
                    Go back home
                </Link>
            </Button>
        </div>
    )
}

export default NotFoundPage;