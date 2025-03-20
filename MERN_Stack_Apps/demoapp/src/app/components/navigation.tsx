'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';//This doesn't work either. so use 'use client'

export const Navigation = () => {
    const pathname = usePathname();
    
    return (
        <nav>
            <Link href='/' className={pathname === '/' ? 'font-bold mr-4' :'text-blue-500 mr-4'}>Home</Link>
            <Link href='/about' className='text-blue-500'>About</Link>
            <Link href='/products/1' className={pathname.startsWith('/products/1') ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>Product 1</Link>
        </nav>
    )
};