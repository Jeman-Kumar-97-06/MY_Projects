import { useLogout } from "../hooks/useLogout";
import SearchBar from "./SearchBar";
import { useGetConvos } from "../hooks/useGetConvos";
import SidebarItem from "./SidebarItem";
import { useAuthContext } from "../hooks/useAuthContext";

export const Sidebar = () => {
    const {logout} = useLogout()
    const {convs,err,loading} = useGetConvos();
    const {user} = useAuthContext();

    return (
        <div className="w-64 bg-white shadow-lg p-4 flex flex-col">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">Chat App</h2>        
            <nav className="flex-1 space-y-4">
                {/* Search bar to search for users */}
                <SearchBar/>
                {
                    convs.length==0 ? 
                        <>
                            {/* { convs.map((c)=>(<SidebarItem user={user} active={false} />))} */}
                            <SidebarItem user={user} active={false}/>
                            <SidebarItem user={user} active={false}/>
                        </> : 
                        <>
                            <p className="text-orange-500 mt-3">No conversations yet!</p>
                        </>
                }
            </nav>
            <button className="mt-auto bg-red-500 text-white py-2 rounded-lg hover:bg-red-600" onClick={logout}>
                Logout
            </button>
        </div>
    )
}