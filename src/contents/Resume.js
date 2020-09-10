import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div className="resume" style={{
                backgroundColor: '#ffffff',
                color: '#000000'
              }}>

                <h1 className="subtopic">To view my Resume, click below !</h1>   
                
                <div className="resumeButton">
                    <button 
                        style={{
                            background: '#ffc728',
                            borderRadius: '5px',
                            color: "black",
                            padding: '10px'
                        }}
                        type="button" 
                        onClick={(e) => {
                        e.preventDefault();
                        window.open("https://drive.google.com/file/d/1PicCC-lpXAz7wa8A9732_1InIjr5BgBa/view?usp=sharing");
                        }}>Resume</button>
                </div>
              
            </div>
        )
    }
}
export default Resume