import React, { useState } from 'react'
import { URL } from '../URL'

//     title:String,
//     genre:String,
//     author: String,
//     publishing_year:Number,


const AddBook = () => {
    const[title, setTitle] = useState('')
    const [genere, setGenere] = useState('')
    const [author, setAuthor] = useState('')
    const [publishing_year, setYear] = useState(0)

    const handleSubmit = ()=>{
      const payload = {
        title,
        genere,
        author,
        publishing_year
      }

      fetch(`${URL}/books/add`, { 
        method: "POST" ,
        headers: {
           "Content-Type" : "application/json",
           authorization : `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(payload)
    }).then(res=>res.json()).then(
      (res)=>{
        console.log(res)
      }
      ).catch(err=>{
        console.log(err)
    });
    }

  return (
    <div>
<input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder='title'/>
<br />
<input type="text" value={genere} onChange={e=>setGenere(e.target.value)} placeholder="genere"/><br />
<input type="text" value={author} onChange={e=>setAuthor(e.target.value)} placeholder="author" /><br />
<input type="text" value={publishing_year} onChange={e=>setYear(+e.target.value)} placeholder="publishing_year"/><br />
<button onClick={handleSubmit}>add</button>
    </div>
  )
}

export default AddBook
