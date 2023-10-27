import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Question.css"

const Questions = () =>{
    //const [questions,setQuestion] = useState([]);

    
    
    const [question,setQuestion] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/Question/getAll")
        .then(res=>res.json())
        .then((result)=>{
            console.log(result);
            setQuestion(result);
        }
        )
    },[])

    const [answer,setAnswer] = useState([]);
    console.log(question);
    const navigate = useNavigate();
    //var question;
    const answer_set = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/answer", {Answer: answer,Title:question})
        .then((response)=>{
            console.log(response);
            if(response.data.message === "Empty"){
            }
            navigate("/question");
        })
    }
    
    // const [answers,setAnswer] = useState([]);

    /*useEffect(()=>{
        Axios.get("http://localhost:3001/api/question/answers")
        .then(res=>{
            console.log(res);
            setanswers(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    })*/

    return(
        <div className="question-body">
                <div className="question-header">
                    <center><h1 className="question-h1">QUESTIONS</h1></center>
                    <a href="/ask_your_query" className="question-button"><button className="quesiton-button-width"><center>ASK QUESTION</center></button></a>
                </div>
                <div className="question-field">
                    {question.map(question=>(
                        <div className="question-tab">
                            <div className="flex-div">
                            <span className="tags-q tags-title">TITLE:</span><span className="tags-q main-title">
                                {question.question}</span><br/>
                            <span className="tags-q tags-title">BODY:</span><span className="tags-q main-title">{question.tag}</span><br/>
                            
                            <span className="tags-q tags-title">ANSWER:</span><span className="tags-q main">{question.answer}</span><br/>
                            {answer.map((answer)=>{
                                if(answer.question===question.question){
                                    return(
                                        <div className="tags-q main-title">{answer.answer}</div>
                                    )
                                }
                            })}
                            </div>
                            <input className="question-input" type="text" placeholder="Answer"
                            onChange={(e) => {
                                setAnswer(e.target.value);
                              }
                            } onClick={(e)=>{
                                setQuestion(question.question);
                            }}/>
                            <button className="button-input" onClick={answer_set}><span className="content-button">submit</span></button>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Questions