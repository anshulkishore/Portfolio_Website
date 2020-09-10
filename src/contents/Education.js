import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv" style={{
                backgroundColor: '#ffffff',
                color: '#000000'
              }}>
                <h1 className="subtopic">My Education</h1>
                
                <Widecard title="Bachelor of Technology in Computer Science and Engineering" 
                where="Motilal Nehru National Institute of Technology, Allahabad, Uttar Pradesh – India" from="2015" to="2019"
                score="CPI - 8.04"/>
                
                <Widecard title="All India Senior School Certificate Examination" 
                where="Delhi Public School, Varanasi, Uttar Pradesh – India" from="2014" to="2015"
                score="Percentage – 95.60%"/>
                
                <Widecard title="All India Secondary School Examination" 
                where="Delhi Public School, Varanasi, Uttar Pradesh – India" from="2012" to="2013"
                score="Percentage – 95.00%"/>
            </div>
        )
    }
}
export default Education