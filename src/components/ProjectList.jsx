import { useState } from 'react'
import SearchBar from './SearchBar'
export default function ProjectList({projects}){
  //The query state is initialized as an empty string and the setQuery method is used to update it
  const[query,setQuery]=useState("")
  //handleOnChange() function uses the setQuery() method to update the value of query in real time as the user types into the search panel
  function handleOnChange(event){
      setQuery(event.target.value)
  }
  //handleOnSearch() function uses the query and the filter array method to return projects with a project title that matches the user's input
  function handleOnSearch(){
    return projects.filter(project => project.title.toLowerCase().includes(query.toLowerCase()))

  }
    return(
        
    <ul role="list" className="mt-2  mx-auto max-w-lg shadow-md p-6">
          <h2 className="text-base/7 font-semibold text-gray-900">Projects</h2>
          <SearchBar
              query={query}
              handleOnChange={handleOnChange}
          />
      {/*The search result array returned by the handleOnSearch function is used to dynamically display projects that have a title that matches the user input*/}
      {handleOnSearch().map((project,) => (
        <li className="flex justify-between gap-x-6 py-5" key={project.id}>
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-lg/6 font-semibold text-gray-900">{project.title}</p>
              <p className="mt-1  text-sm/5 text-gray-900">{project.description}</p>
            </div>
          </div>
          
        </li>
      ))}
    </ul>
        
    )
}