import Login from "./components/Login";
import Signup from "./components/Signup";
import Addbook from "./components/AddBook"
import {Routes, Route} from 'react-router-dom'
import { Link } from "react-router-dom";
import Books from "./components/Books";
import Update from "./components/Update";
 

function App() {
  return (
    <div className="App">
    <Link to='/addbook'>addBook</Link>
    <h1>Book taking Application</h1>
   
    <Routes>
      <Route path="signup" element={ <Signup/>}  />
      <Route path="login" element={ <Login/>}/>
      <Route path="addbook" element={ <Addbook/>}/>
      <Route path="/" element={ <Books/>}/>
      <Route path="edit/:id" element={ <Update/>}/>
    </Routes>
     
      
    </div>
  );
}

export default App;
