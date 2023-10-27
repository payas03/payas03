import React,{useState,useEffect} from "react"
import Axios from "axios";
import Navbar_login from "../Navbar_Login/Navbar_login";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import "../Style/Ask_your_query.css"
import {Link} from "react-router-dom";

const Add_Artical = () =>{

    const [article_title,setArticle_title] = useState('');
    const [article_content,setArticle_content] = useState('');
    const [link,setLink] = useState('');

    const navigate = useNavigate();


    const handleClick=(e)=>{
      e.preventDefault()
      const Article={article_title,article_content,link}
      console.log(Article)
      // if(Article.article_title=="" || Article.article_content=="" || Article.link) return;
      fetch("http://localhost:8080/Article/add",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(Article)
      }).then(()=>{console.log("New article is added")})
    }

    /*const add_article = (e) =>{
      e.preventDefault();
      Axios.post("http://localhost:3001/article", {Title:article_title,Content:article_content,Link:link})
      .then((response)=>{
        if(response.data.message === "1"){
          navigate("/article");
        }
        if(response.data.message === "2"){
          navigate("/");
        }
      })
      .catch(error=>{
        console.log(error.response);
      })
    }*/

    return(
        <div className="ask_your_query-body">
            <Navbar_login/>
            <Sidebar/>
            <div class="container">
      <form >
        <div class="title">Add Article</div>
        <div class="input-box underline">
          <label>Title:</label>
          <input type="text" placeholder="Enter Your Title"
           onChange={(e) => {
            setArticle_title(e.target.value);
          }}
           required/>
        </div>
        <div class="input-box">
          <label>Article_Content</label>
          <input className="artical_content" type="text" placeholder="Enter Your Content"
          onChange={(e) => {
            setArticle_content(e.target.value);
          }}required/>   
        </div>
        <div class="input-box">
          <label>Link</label>
          <input className="artical_content" type="text" placeholder="Enter Your Link"
          onChange={(e) => {
            setLink(e.target.value);
          }}
           required/>   
        </div>
        <Link to='/article'> <div class="input-box button">
          <input type="submit" name="" onClick={handleClick} value="Continue"/>
        </div></Link>
      </form>
    </div>
  </div>
    );
};

export default Add_Artical