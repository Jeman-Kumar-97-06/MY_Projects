const Home = () => {
    return (
        <div style={{marginLeft:"20px",marginTop:"50px",padding:"1px 16px",height:"800px"}} className="chat_main">     
            <div class="flex items-start gap-2.5">
                <img class="w-8 h-8 rounded-full" src="https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960" alt="Jese image"/>
                <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                    </div>
                    <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                </div>   
            </div>


            <form class="mb-6 msg_inpt_form">
                <label for="success" class="block mb-2 text-sm font-medium text-green-700 dark:text-gray-500">Your Message</label>
                <input type="text" id="success" class="bg-green-50 border border-green-500 text-gray-900 dark:text-white placeholder-gray-700 dark:placeholder-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 msg_inpt" placeholder="Type a Message"/>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send
                </button>
                {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Well done!</span> Some success message.</p> */}
            </form>

        </div>
    )
};

export default Home;