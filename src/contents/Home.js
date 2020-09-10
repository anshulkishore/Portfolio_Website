import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_pic.JPG';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic" alt="profile pic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Anshul Kishore','I am a software engineer']} speed={100} eraseDelay={700}/>
                <Social />
            </div>
        )
    }
}
export default Home