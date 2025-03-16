const Modal = () => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded shadow-md text-center w-96">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              // onClick={e=>setIsModalOpen(false)} // Replace with your close function
            >
              ✖
            </button>
            <h2 className="text-xl font-bold">Generating...</h2>
            <div className="loader mt-4"></div>
            <div className="mt-4">
              <button className="bg-green-500 px-4 py-2 text-white rounded ml-2">Download</button>
            </div>
          </div>
        </div>
    )
};

export default Modal;