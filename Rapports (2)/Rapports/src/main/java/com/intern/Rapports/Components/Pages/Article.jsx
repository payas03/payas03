import React,{useState,useEffect} from "react"
import Axios from "axios";
import Navbar_login from "../Navbar_Login/Navbar_login";
import Sidebar from "../Sidebar/Sidebar";
import "../Style/Tags.css";

    const Article = () =>{
        const [article,setArticle] = useState([]);
    
   
    
        useEffect(()=>{
            fetch("http://localhost:8080/Article/getAll")
            .then(res=>res.json())
            .then((result)=>{
                setArticle(result);
            }
            )
        },[])
    
    


    
    
  

    /*useEffect(()=>{
        Axios.get("http://localhost:3001/api/question/article")
        .then(res=>{
            console.log(res);
            setarticle(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    })*/
    return(
        <div className="section-body">
            <Navbar_login/>
            <Sidebar/>
            <div className="question-body">
                <div className="question-header">
                    <center><h1 className="question-h1">ARTICLE</h1></center>
                    <a href="/add_artical" className="question-button"><button className="quesiton-button-width"><center>ADD ARTICLE</center></button></a>
                </div>
                <div className="question-field">
                    {article.map(article=>(
                        <div className="question-tag">
                            <div className="flex-div">
                            <span className="tags-q tags-title">TITLE:</span><span className="tags-q main-title">
                                {article.article_title}</span><br/>
                            <span className="tags-q tags-title">BODY:</span><span className="tags-q main-title">{article.article_content}</span><br/>
                            <span className="tags-q tags-title">LINK:</span><a className="main-title" href={article.link} target="_blank"><span className="tags-q main-title">CLICK ME</span></a><br/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Article