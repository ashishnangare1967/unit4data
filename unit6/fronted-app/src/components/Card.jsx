import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title, author,publishing_year, user, _id, handleDelete }) => {
  return (
    <div>
        <Link>
        <h1>title : {title}</h1>
        <h3>Athor : {author}</h3>
        <p>Publishing Year: {publishing_year}</p>
        <h2>{user}</h2>
        <Link to={`edit/${_id}`}><button>Edit</button></Link>
        <button onClick={()=>{handleDelete(_id)}}>Delete</button>
        </Link>
        

      
{/* title
"myreactnode"
author
"ashish"
publishing_year
1934
userID
"64834dad70666422df90829d"
user
"ashish" */}
    </div>
  )
}

export default Card
