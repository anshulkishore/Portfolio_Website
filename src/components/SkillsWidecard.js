import React, { Component } from 'react'

class SkillsWidecard extends Component {
    render() {
        return (
            <div class="widecard">
                <div class="compdet">
                    <h3>{this.props.title}</h3>
                    <h4 class="secondtext">{this.props.skills}</h4>
                </div>
            </div>
        )
    }
}
export default SkillsWidecard