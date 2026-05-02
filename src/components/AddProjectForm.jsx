export default function AddProjectForm({project,OnSubmit,OnChange}){
    return(
    <form className="mt-2 mx-auto max-w-lg shadow-md p-6" onSubmit={OnSubmit}>
      
        <div >
          <h2 className="mt-2 text-base/7 font-semibold text-gray-900">Add Project</h2>

          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm/6 font-medium text-grey-900">
                Title
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-grey/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                  <input
                    id="title"
                    name="title"
                    value={project.title}
                    onChange={OnChange}
                    type="text"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 "
                    required
                  />
                </div>
              </div>
            </div>
           
           <div className="col-span-full">
              <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  value={project.description || ''}
                  onChange={OnChange}
                  rows={5}
                  className="block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  required
                  
                />
              </div>
            </div>
        </div>
        <button
          type="submit"
          className="mt-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
        </div>
    
    </form>
    )

}