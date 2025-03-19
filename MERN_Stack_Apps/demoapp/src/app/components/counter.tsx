'use client';
import { useState } from "react";//Since server components don't support 'useState'/'useEffect'. you need to specify that this is a client comp

export const Counter = () => {
    console.log("Counter component");
    const [count,setCount] = useState(0);
    return (
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    )
}