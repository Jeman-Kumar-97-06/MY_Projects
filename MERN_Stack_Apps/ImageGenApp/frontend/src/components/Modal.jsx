const Modal = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold">Generating...</h2>
            <div className="loader mt-4"></div>
            <div className="mt-4">
              <button className="bg-blue-500 px-4 py-2 text-white rounded">Save</button>
              <button className="bg-green-500 px-4 py-2 text-white rounded ml-2">Download</button>
            </div>
          </div>
        </div>
    )
};

export default Modal;