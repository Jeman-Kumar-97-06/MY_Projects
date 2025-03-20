'use client';
import { useRouter } from "next/navigation";
export default function About() {
    const router = useRouter();
    
    return (
        <>
            <button onClick={()=>router.push('/')} className='bg-blue-500 text-white p-2 rounded-md'>Go Home</button>
            <h1>About page macha</h1>
        </>
    )
}