const Sidebar = () => {
    return (
        <div>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                
                
                {/* Search Bar : */}
                <form class="max-w-md mx-auto">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>


                {/* Sidebar options */}
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">


                        {/* Dashboard Option */}
                        <li>   
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                </svg>
                                <span class="ms-3">Dashboard</span>
                            </a>
                        </li>


                        {/* UserName */}
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                </svg>
                                <p><span class="flex-1 ms-3 whitespace-nowrap">Kanban</span></p>
                                <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                            </a>
                        </li>


                        {/* Other Users */}
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <img  class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18" src='data:image/jpeg;base64,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' />
                                <p><span class="flex-1 ms-3 whitespace-nowrap">Users</span></p>
                            </a>
                        </li>


                        {/* SignIn Option */}
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                                </svg>
                                <p><span class="flex-1 ms-3 whitespace-nowrap">Sign In</span></p>
                            </a>
                        </li>


                        {/* Signup Option */}
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                                </svg>
                                <p><span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span></p>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
    </div>
    )
};

export default Sidebar;