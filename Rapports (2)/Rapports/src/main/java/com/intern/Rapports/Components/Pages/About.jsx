import React from "react"
import Navbar from "../Navbar/HomeNavbar";
import "../Style/About.css";
import discussion from "./discussion.png"

const About = () =>{
    return(
        <div className="body-tag">
            <Navbar/>
            <div className="section-body ">
                <center><img id="img1" src={discussion} alt="people having discussion"/></center>
                <div className="section-tag">
                  <i> <center><p className="para-graph">The ask your query site enables you to raise enquiries regarding your internships, academics, other sports related queries.<br/> This site helps you to connect with people around the campus.<br/> This is a platform for connecting with your seniors, juniors and your fellow students.<br/>If the user has published any article, or if you have any article to share in the 
                   forum, you can post it there and the link can be added to the article. On clicking 
                    it, it will be directed to the link which you have posted.<br/>The question page has the tag for every question you post. The questions will be 
                    classified under the tags. The tags can also be added new in the tags page</p></center></i>
                </div>
            </div>
        </div>
    );
};

export default About