import React, { useEffect, useState } from 'react'
import Card from './Card';
import { URL } from '../URL';

const Books = () => {
    const[data, setData] = useState([]);
    const[state, setState] = useState(true)
    useEffect(()=>{
        fetch(`${URL}/books`, { 
            method: "GET" ,
            headers: {
               "Content-Type" : "application/json",
               authorization : `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>res.json()).then(
          (res)=>{
            console.log(res)
            setData(res)
          }
          ).catch(err=>{
            console.log(err)
        });
    },[state])

    const handleDelete = (id)=>{
      fetch(`${URL}/books/delete/${id}`, { 
        method: "DELETE" ,
        headers: {
           "Content-Type" : "application/json",
           authorization : `Bearer ${localStorage.getItem("token")}`
        }
    }).then(res=>res.json()).then(
      (res)=>{
        console.log(res)
        setState(p=>!p)
      }
      ).catch(err=>{
        console.log(err)
    });
    }

    
  return (
    <div>
      <h1>
      </h1>
     {data.length>0 && data.map(el=><Card handleDelete={handleDelete}  {...el}/>)}
    </div>
  )
}

export default Books
