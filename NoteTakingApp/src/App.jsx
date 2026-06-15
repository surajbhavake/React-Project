import React from 'react'
import { useState } from 'react'

function App() {

  const[title,setTitle] = useState('')
  const[description,setDescription] = useState('')
  const[notes,setNotes] = useState([]);
  const[error,setError] = useState('');
  const[editingIndex,setEditingIndex] = useState(0)

  function addNotes(){

    if(title.trim() === ''|| description.trim() === ''){
      setError('Please Enter Something Valid')
    }
    else{
    setNotes(prev=>[{title:title,description:description},...prev])
    setTitle('')
    setDescription('')
    setError('')

    console.log(notes)
    }
  }

  function handelDelete(indexToDelete){
    setNotes(prev=>prev.filter((note,index)=>(
      index !== indexToDelete
    )))
  }

  function handelEdit(indexToEdit){

    setEditingIndex(indexToEdit)
    setTitle(notes[indexToEdit].title)
    setDescription(notes[indexToEdit].description)

   
  }
  function updateNotes(){
    const updatedNotes = notes.map((note,index)=>{
      if(index === editingIndex){
        return{title,description}
      }
      return note
  })

  setNotes(updatedNotes)
  }


  return (
    <div>
      <div>
        <label>Title : </label>
        <input
        placeholder='Enter the title'
        value={title}
        onChange={(e)=>setTitle(e.currentTarget.value)}
        />
      </div>
      
      <div>
        <label>Description : </label>
        <input
        placeholder='Enter Description'
        value={description}
        onChange={(e)=>setDescription(e.currentTarget.value)}
        />
      </div>
      <br/>

      <label>{error}</label>

      <div>
        <button
        onClick={addNotes}
        >Add notes</button>
      </div>
       <div>
        <button
        onClick={updateNotes}
        >Update</button>
      </div>

      <div>
        {notes.map((note,index)=>(
          <div key={index}>
            <p>{`Title : ${note.title}`}</p>
           
            <p>{`Descripton : ${note.description}`}</p>
            <button
            onClick={()=>handelDelete(index)}
            >Delete</button><br/>

            <button
            onClick={()=>{
              handelEdit(index)
            }}
            >Edit</button>
            <h3>------------------------------</h3>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default App
