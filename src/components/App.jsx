import { useState } from 'react'
import Header from './Header'
import AddProjectForm from './AddProjectForm'
import ProjectList from './ProjectList'
function App() {
  //The project state is initialized as an object with three properties, the project id, the project title and the project description
  //createProject is the function that updates project state
  const [project,createProject]= useState(
    {
    id:"",
    title: "",
    description: ""
    }
  )
  //The projects state is initialized as an empty array and it holds the projects added by the user
  //createProject is the function that updates the projects state
  const [projects,updateProjects]= useState([])
  //handleOnChange() handles updating the properties of the project object by first obtaining the name and value of the input field that triggered the change event
  //and then using the createProject() method to update the key/value pair in the project object that matches the name/value pair from the input
  function handleOnChange(event){
    const {name,value}= event.target
    createProject((prev) => ({
      ...prev,
      [name]:value
    }))

  }
  //handleOnSubmit() handles updating of the projects array and updating the project id based on the size of the array at that point
  //The function also clears the title and description input fields after submission 
  function handleOnSubmit(event){
    event.preventDefault()
    updateProjects((prev) => [...prev, {...project,id:prev.length+1}])
    document.getElementById('title').value=''
    document.getElementById('description').value=''
    
  }
//The Header component displays the heading at the top of the page
//The AddProjectForm component displays a form that allows a user to add a project title and description.
//The project object,handleOnChange() function and handleOnSubmit() function are passed as props to the AddProjectForm component
//The ProjectList component displays the list of projects added in real time
  return (
    <div className = "w-full ">
      <Header/>
          <AddProjectForm
          project={project}
          OnChange={handleOnChange}
          OnSubmit={handleOnSubmit}
          />
      <ProjectList projects={projects}/>
    </div>
    

  )
  
}

export default App
