const Recents = () => {
    return (
        <div className="flex gap-4 mt-6 w-full max-w-4xl m-auto">
          <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Recent Prompts</h3>
            <ul className="mt-2 space-y-2">
              <li className="p-2 bg-white rounded shadow">Prompt 1</li>
              <li className="p-2 bg-white rounded shadow">Prompt 2</li>
              <li className="p-2 bg-white rounded shadow">Prompt 3</li>
            </ul>
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Recent Generated Images</h3>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <img src="https://via.placeholder.com/100" alt="Generated" className="rounded shadow" />
              <img src="https://via.placeholder.com/100" alt="Generated" className="rounded shadow" />
            </div>
          </div>
        </div>
    )
}

export default Recents