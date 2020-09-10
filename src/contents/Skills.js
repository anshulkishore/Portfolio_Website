import React, { Component } from 'react';
import SkillsWidecard from '../components/SkillsWidecard'

class Skills extends Component {
    render() {
        return (
            <div className="condiv" style={{
                backgroundColor: '#ffffff',
                color: '#000000'
              }}>
                <h1 className="subtopic">My Technical Skills and Interests</h1>
                
                <SkillsWidecard title="Areas of Interest" 
                skills="Android App Development, Data Structures, Algorithms"/>

                <SkillsWidecard title="Languages" 
                skills="C, C++, Java, JavaScript, GoLang (basic)"/>

                <SkillsWidecard title="Database" 
                skills="MySQL(basic)"/>

                <SkillsWidecard title="IDEs Used" 
                skills="Android Studio, Netbeans, Visual Studio"/>
            </div>    
        )
    }
}

export default Skills