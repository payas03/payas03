import React,{useState} from "react"
import Axios from "axios";
import Navbar from "../Navbar/HomeNavbar";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import "../Style/Login.css";
import { Link } from 'react-router-dom'; 

const Login = () =>{
    const [email, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = (e) =>{
      e.preventDefault();
      <Profile data={email}/>
      Axios.post("http://localhost:3001/login", { username: email, password: password })
      .then((response)=>{
        if(response.data.message === "1"){
          navigate("/question");
        }
        if(response.data.message === "2"){
          navigate("/");
        }
      })
      .catch(error=>{
        console.log(error.response);
      })
    }
    return(
      <div>
        <div>
            <Navbar/>
        </div>
    <div className="section-body">
        <div className="container">
      <form onSubmit={(e)=>login(e)}>
        <div className="title">Login</div>
        <div className="input-box underline">
          <label>Email</label>
          <input type="text" placeholder="Enter Your Email" 
          onChange={(e) => {
            setUserName(e.target.value);
          }
        } required/>
        </div>
        <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }
        } required/>   
        </div>
       <Link to='/question' style={{textDecoration: 'none'}}><div className="input-box button">
           <input type="submit" name="" value="Continue"/>
        </div></Link>
      </form>
    </div>
    </div>
    </div>
    );
};

export default Login