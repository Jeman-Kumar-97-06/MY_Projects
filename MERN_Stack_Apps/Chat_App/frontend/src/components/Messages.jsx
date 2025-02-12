const Messages = () => {
    return (
        <div className="message_each">
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
        </div>
    );
};

export default Messages