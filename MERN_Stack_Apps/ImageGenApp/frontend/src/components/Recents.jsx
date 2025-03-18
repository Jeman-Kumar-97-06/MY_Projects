const Recents = ({txts,ims}) => {
    return (
        <div className="flex gap-4 mt-6 w-full max-w-4xl m-auto flex-col sm:flex-row">
          <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Recent Prompts</h3>
            <ul className="mt-2 space-y-2">
              {txts.map(t=>(
                <li className="p-2 bg-whtie rouded shadow">{t}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Recent Generated Images</h3>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {
                ims.map(i=>(
                  <img src={i} alt="Generated" className="rounded shadow" />
                ))
              }
            </div>
          </div>
        </div>
    )
}

export default Recents