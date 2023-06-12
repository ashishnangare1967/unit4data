import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL } from '../URL'

const Update = () => {
  const[title, setTitle] = useState('')
  const [genere, setGenere] = useState('')
  const [author, setAuthor] = useState('')
  const [publishing_year, setYear] = useState(0)

  const {id} = useParams()

    useEffect(()=>{
        fetch(`${URL}/books/edit/${id}`, { 
            method: "GET" ,
            headers: {
               "Content-Type" : "application/json",
               authorization : `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>res.json()).then(
          (res)=>{
            console.log(res)
            setTitle(res[0].author)
            setGenere(res[0].genere)
            setAuthor(res[0].author)
            setYear(res[0].publishing_year)
          }
          ).catch(err=>{
            console.log(err)
        });
    },[])

    const handleSubmit = ()=>{
      const payload = {
        title,
        genere,
        author,
        publishing_year
      }

      fetch(`${URL}/books/update/${id}`, { 
        method: "PATCH" ,
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
<button onClick={handleSubmit}>Update</button>
    </div>
  )
}

export default Update
