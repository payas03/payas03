import React,{useState,useEffect} from "react"
import Navbar_login from "../Navbar_Login/Navbar_login";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import "../Style/Tags.css";
const Tags = () =>{
    const [tag,setTag] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/Tag/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setTag(result);
        }
        )
    },[])

    /*useEffect(()=>{
        Axios.get("http://localhost:3001/api/question/main_tags")
        .then(res=>{
            console.log(res);
            setmain_tags(res.data);
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
                    <center><h1 className="question-h1">TAGS</h1></center>                    
                    <a href="/add_tags" className="question-button"><button className="quesiton-button-width"><center>ADD TAG</center></button></a>
                </div>
                <div className="tags-body">
                    {tag.map(tag=>(
                        <div className="tags-content">
                        <div className="tags-total">
                            <div className="header-content" style={{flex:1}}>{tag.tagname}</div>
                            <div className="main-content" style={{flex:1}}>{tag.tag_content}</div>
                        </div>
                    </div>
                    ))} 
                </div>
            </div>
        </div>
    );
};

export default Tags