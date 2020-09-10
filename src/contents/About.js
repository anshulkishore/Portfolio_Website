import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="condiv" style={{
                backgroundColor: '#ffffff',
                color: '#000000'
              }}>
                <h1 className="subtopic">About Me</h1>
                <h4>Hey there,</h4>
                <h1>I'm Anshul Kishore</h1>
                <h3><u><i>Full Stack Developer</i></u> | <u><i>Android App Developer</i></u></h3>
                <br></br>
                <p>I started my journey in the world of computers from a young age,
                now I’m 24 years old, working as a <b>Software Engineer</b> in <b>Samsung Semiconductor 
                India Research & Development center (SSIR)</b> since July 2019. Currently I work on Rich Communication 
                Suite (RCS) Services which include Auto-Configuration, User Capabilities, Chat, Chatbot, File transfer, 
                MSRP, etc. Programming, software development, Android App development are my center of interest.
                I have worked in <b>SAMSUNG SOUTH KOREA HEADQUARTER (Device Solutions Research)</b> for 1 
                month in December 2019 on <u><i>'Rich Communication Suite (RCS)'</i></u>.
                </p>
            </div>
        )
    }
}
export default About