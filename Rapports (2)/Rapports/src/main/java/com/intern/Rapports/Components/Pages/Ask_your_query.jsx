import React,{useState,useEffect} from "react"
import Axios from "axios";
import Navbar_login from "../Navbar_Login/Navbar_login";
import Sidebar from "../Sidebar/Sidebar";
import {useNavigate} from "react-router-dom";
import "../Style/Ask_your_query.css"
import { Link } from "react-router-dom";


const Ask_your_query = () =>{
    const [question, setQuestion] = useState('');
    const [tag, setTag] = useState('');
   // const [tags,setTags] = useState('');

    const navigate = useNavigate();


    const handleClick=(e)=>{
      // e.preventDefault()
      const Question={question,tag}
      console.log(Question)
      if(Question.question=="" || Question.tag=="") return;
      fetch("http://localhost:8080/Question/add",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(Question)
      }).then(()=>{console.log("New question is added")})
    }


   /* const question = (e) =>{
      e.preventDefault();
      Axios.post("http://localhost:3001/question",{title:question_title,body_content:body,tags_content:tags})
      .then((response)=>{
        console.log(response);
        if(response.data.message==="1"){
          navigate("/question");
        }
      })
      .catch(error=>{
        console.log(error);
      })
    }*/

    /*const [dbtags,setdbtags] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/api/question/storedtags")
      .then(res=>{
          console.log(res);
          setdbtags(res.data);
      })
      .catch(err=>{
          console.log(err);
      })
  })*/   


    return(
        <div className="ask_your_query-body">
            <Navbar_login/>
            <Sidebar/>
            <div class="container">
      <form >
        <div class="title">Question Box</div>
        <div class="input-box underline">
          <label>Question:</label>
          <input type="text" placeholder="Enter Your Question"
            onChange={(e) => {
              setQuestion(e.target.value);
            }
          }
           required/>
        </div>
        <div class="input-box">
          <label>Tag</label>
          <input type="text" placeholder="Enter Your Tag"
          onChange={(e) => {
            setTag(e.target.value);
          }
        }
           required/>   
        </div>
        {/* <div class="input-box">
          <label>Tags</label><br/>
          <select name="tags" id="tags-name" onChange={(e)=>{
            setTags(e.target.value);
          }}>
            {dbtags.map((tag)=>(
              <option value={tag.TAGS_NAME}>{tag.TAGS_NAME}</option>
            ))}
          </select>
        </div> */}
        <Link to='/question'><div class="input-box button">
         <input type="submit" onClick={handleClick} name="" value="Continue"/>
        </div></Link>
      </form>
    </div>
        </div>
    );
};

export default Ask_your_query;