import React,{useState} from "react"
import Axios from "axios";
import Navbar_login from "../Navbar_Login/Navbar_login";
import Sidebar from "../Sidebar/Sidebar";
import {useNavigate} from "react-router-dom";
import "../Style/Ask_your_query.css"
import {Link} from "react-router-dom";
const Add_tags = () =>{
    const [tagname,setTagname]=useState('');
    const [tag_content,setTag_content]=useState('');
    const navigate = useNavigate();


    const handleClick=(e)=>{
      //e.preventDefault()
      const Tag={tagname,tag_content}
      console.log(Tag)
      if(Tag.tagname=="" || Tag.tag_content=="") return;
      fetch("http://localhost:8080/Tag/add",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(Tag)
      }).then(()=>{console.log(Tag)})
    }

    // const question = (e) =>{
      // e.preventDefault();
      // Axios.post("http://localhost:3001/tags",{tag_Name:tags_title,Content:tags_content})
      // .then((response)=>{
        // console.log(response);
        // if(response.data.message==="1"){
          // navigate("/tags");
        // }
      // })
      // .catch(error=>{
        // console.log(error);
      // })
    // }

    return(
        <div className="ask_your_query-body">
            <Navbar_login/>
            <Sidebar/>
            <div class="container">
      <form >
        <div class="title">Tags</div>
        <div class="input-box underline">
          <label>Tag Name:</label>
          <input type="text" placeholder="Enter Your TagName"
            onChange={(e) => {
              setTagname(e.target.value);
            }
          }
           required/>
        </div>
        <div class="input-box">
          <label>Tag Content:</label>
          <input type="text" placeholder="Enter Your Content"
          onChange={(e) => {
            setTag_content(e.target.value);
            }
          }
           required/>   
        </div>
        <Link to='/tags'> <div class="input-box button">
          <input type="submit" name="" onClick={handleClick} value="Continue"/>
        </div></Link>
      </form>
    </div>
        </div>
    );
};

export default Add_tags