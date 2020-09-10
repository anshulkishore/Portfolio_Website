import React, {Component} from 'react'
import ProjectsWidecard from '../components/ProjectsWidecard'
import chatbotpic from '../img/chatbot.jpg';
import cricketpic from '../img/cricket.jpg';
import campusrecruitment from '../img/campusrecruitment.jpg';
import crash from '../img/crash.jpg';
import imagecolor from '../img/imagecolor.png';
import recsystem from '../img/recsystem.jpg';
import rkmstation from '../img/rkmstation.png';
import codeosoccer from '../img/codeosoccer.jpg';

class Projects extends Component {
    render() {
        return (
            <div className="condiv" style={{
                backgroundColor: '#ffffff',
                color: '#000000'
              }}>
                <h1 className="subtopic">My Projects</h1>    
                
                <div className="projects">
                    
                    <ProjectsWidecard image={chatbotpic}
                    title="RCS Chatbot" 
                    tech="[Java, Android]"
                    time="Samsung, June 2020 - July 2020"
                    desc="RCS Chatbot is the requirement of US operators such as T-Mobile, AT&T, etc. It includes Chatbot directory search, 
                    Specific Chatbot directory search, Query Search for Chatbots, Chatbot Information retrieval, Subscription, Spam reporting, 
                    One-to-one and Standalone communication with chatbot, Chatbot communication in Private mode, Rich card handling, file transfer, UI development, etc."/>
                    
                    <ProjectsWidecard image={cricketpic}
                    title="Automated Summarization of Cricket Videos" 
                    tech="[Image Processing, Python]"
                    time="B.Tech 4th year, 8th Sem"
                    desc="Project to automatically summarize cricket videos accomplished using key event extraction
                    viz wickets and boundaries."/>

                    <ProjectsWidecard image={campusrecruitment}
                    title="Campus Recruitment - An app for Training and Placement cell" 
                    tech="[Android Application Development]"
                    time="B.Tech 3rd year, 5th Sem"
                    desc="Android and Firebase Database based project to store details of students on Google cloud.
                    Student can view his profile, current openings, register for companies, view placement stats.
                    Admin can add companies, manage students, view placement stats, etc."/>

                </div>

                <div className="projects">

                    <ProjectsWidecard image={crash}
                    title="Crash Automation in Modem" 
                    tech="[C++, ARM]"
                    time="Samsung , May 2018 – July 2018"
                    desc="Project to design and develop utilities to help crash debugging using AXF and Dump files for 
                    issues and do First Level Analysis of the crash."/>

                    <ProjectsWidecard image={imagecolor}
                    title="Black and White Image Colorization using Deep CNN" 
                    tech="[Machine Learning, Python]"
                    time="B.Tech 4th year, 7th Sem"
                    desc="Project to automatically colorize black and white images using deep CNN and other
                    machine learning techniques."/>

                    <ProjectsWidecard image={recsystem}
                    title="Multicriteria Recommender System Through Particle Swarm Optimization" 
                    tech="[Machine Learning, Python]"
                    time="B.Tech 3rd year, 6th Sem"
                    desc="Project to recommend movies to users using multiple criteria. Worked on Yahoo Movie Dataset."/>

                    </div>

                    <div className="projects">

                    <ProjectsWidecard image={rkmstation}
                    title="RKM PLAYER – A music player app for Mobile Devices" 
                    tech="[Android Application Development]"
                    time="B.Tech 2nd year, 3rd Sem"
                    desc="The Application provides a user-friendly interface to play music files in android powered
                    device. It has various features like online lyrics fetching, auto addition of music files of
                    various formats from internal/external storages and other advanced features."/>

                    <ProjectsWidecard image={codeosoccer}
                    title="CODE-O-SOCCER (SIMUROSOT Client Program)" 
                    tech="[C++]"
                    time="B.Tech 2nd year, 4th Sem"
                    desc="Code-O-Soccer is a strategy-based coding project of autonomous soccer playing robots.
                    Simurosot consists of a server which has soccer game environment (playground, robots, score-board, etc.) 
                    and two client programs with the game strategies."/>        
                </div>
            </div>    
        )
    }
}

export default Projects