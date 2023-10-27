import React,{useState} from "react"
import Axios from "axios";
import Navbar from "../Navbar/HomeNavbar";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom'; 


const Signup = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const handleClick=(e)=>{
    //e.preventDefault()
    const signup={password,username,email}
    console.log(signup)
    fetch("http://localhost:8080/Signup/add",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(signup)
    }).then(()=>{console.log("New login added")})
  }


  const navigate = useNavigate();

  // const register = (e) => {
  //   e.preventDefault();
  //   Axios.post("http://localhost:3001/register", { username: usernameReg, password: passwordReg,email:username,phone:phone})
  //   .then((response)=>{
  //     console.log(response);
  //     if(response.data.message === "1"){
  //       navigate("/login");
  //     }
  //     if(response.data.message === "2"){
  //       navigate("/");
  //     }
  //     if(response.data.message==="3"){
  //       navigate("/");
  //     }
  //   })
  //   .catch(error=>{
  //     console.log("correct error");
  //     console.log(error.response);
  //   })
  // }
    return(
      <div>
        <div>
            <Navbar/>
        </div>
      <div className="section-body">
    <div class="container" style={{marginTop:"35px"}}>
      <form>
        <div className="title">Signup</div>
        <div className="input-box underline">
        <label for="Email">Email</label>
          <input type="text" placeholder="Enter Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }
          }
          required/>
          <div className="underline"></div>
        </div>
        <div className="input-box">
        <label for="password">Create Password</label>
          <input type="password" placeholder="Enter Your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }
        }
          required/>
          <div class="underline"></div>
        </div>
        <div className="input-box">
        <label for="username">User Name</label>
          <input type="text" placeholder="Enter Your Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }
        }
          required/>
          <div class="underline"></div>
        </div>
        {/* <div className="input-box">
        <label for="phone">Phone</label>
          <input type="text" placeholder="Enter Your Phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }
        }
          required/>
          <div class="underline"></div>
        </div> */}
      <Link to='/question' style={{textDecoration: 'none'}}><div className="input-box button">
       <input type="submit" onClick={handleClick} name="" value="Continue"/>
        </div></Link>
      </form>
    </div>
    </div>
    </div>
    );
};
export default Signup