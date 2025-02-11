const Navbar = () => {
  return (
    <div className='navbar_comp'>
      <div className="searchbar_on_nav">
          <form className="max-w-md search_form_nav">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form> 
      </div>
      <div className="users_on_nav">
        <div className='user_each'>
              <img class="inline-block size-8 rounded-full ring-2 ring-white" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfTzRiDc-HYxu6l5_jZpSqkOsctxH-oMesA&s'/>
              <span className="user_name_nav"> User1</span>
        </div>
        <div className='user_each'>
              <img class="inline-block size-8 rounded-full ring-2 ring-white" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfTzRiDc-HYxu6l5_jZpSqkOsctxH-oMesA&s'/>
              <span className="user_name_nav"> User1</span>
        </div>
        <div className='user_each'>
              <img class="inline-block size-8 rounded-full ring-2 ring-white" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfTzRiDc-HYxu6l5_jZpSqkOsctxH-oMesA&s'/>
              <span className="user_name_nav"> User1</span>
        </div>
        <div className='user_each'>
              <img class="inline-block size-8 rounded-full ring-2 ring-white" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfTzRiDc-HYxu6l5_jZpSqkOsctxH-oMesA&s'/>
              <span className="user_name_nav"> User1</span>
        </div>
        <div className='user_each'>
              <img class="inline-block size-8 rounded-full ring-2 ring-white" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfTzRiDc-HYxu6l5_jZpSqkOsctxH-oMesA&s'/>
              <span className="user_name_nav"> User1</span>
        </div>
      </div>
      
      <div className="logout_on_nav">
          <a href="#">
            <span class="material-symbols-outlined">Logout</span>
          </a>
      </div>
    </div>
  )
}

export default Navbar;