export default function SearchBar({query,handleOnChange}){
    return(
          <form >
            <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-grey/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                  <input
                    id="search"
                    name="search"
                    value={query}
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Search for a project by title"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 "
                    required
                  />
                </div>
         </form>
    )
}