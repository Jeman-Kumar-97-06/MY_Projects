'use client'
import { useState,useEffect } from "react";

type User = {
    id : number,
    name : string,
    username : string,
    email : string,
    phone : string
};

export default function UsersClient() {
    const [users,setUsers] = useState<User[]>([])//<User[]> means an array of objects that satisfy 'User' type
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    useEffect(()=>{
        async function fetchUsers () {
            try {
                const resp = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!resp.ok) {
                    throw new Error('Failed to fetch users!')
                }
                const data = await resp.json();
                setUsers(data);
            } catch (err) {
                setError("failed to fetch users!");
                if (err instanceof Error) {
                    setError(`Failed to fetch users: ${err.message}`);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    },[])
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    return (
        <ul className="space-y-4 p-4">
            {users.map((user)=>(
                <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    )
}