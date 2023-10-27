import React,{useState,useEffect} from "react"
import Navbar_login from "../Navbar_Login/Navbar_login";
import Sidebar from "../Sidebar/Sidebar";
import Questions from "../Question_Ask/Questions";
import Rightsidebar from "../RIght_SIdebar/Rightsidebar";
const Questions_page = () =>{
    return(
        <div className="section-body">
            <Navbar_login/>
            <Sidebar/>
            <Rightsidebar/>
            <Questions />
        </div>
    );
};

export default Questions_page;

/*export default function ViewQuestions(){
    const[question,setQuestion]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/Question/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setQuestion(result);
        }
        )
    },[])

    return(
        <div>
            
                <div>
                <div className="section-body">
            <Navbar_login/>
            <Sidebar/>
            <Rightsidebar/>
            <Questions />
        </div>
                    {question.map(question=>(
                    <div className="question-tab"> <h3> <table key={question.id}> 
                            
                            <tr><th>Question_Id</th><td>{question.id}</td></tr>

                            <tr><th>Question</th><td>{question.question}</td></tr>

                            <tr><th>Tag</th><td>{question.tag}</td></tr>
                            </table></h3></div>
                    ))}
                </div>
        </div>
        );
    }*/

//export default ViewQuestions;