import React, { Component } from 'react'

class ProjectsWidecard extends Component {
    render() {
        return (
            <div class="maincomponent">
                <div class="thecard">
                    <div class="thefront">
                        <img src={this.props.image} />
                        <h3>{this.props.title}</h3>
                        <h4 class="secondtext">{this.props.tech}</h4>
                        <h4 class="secondtext" style={{
                            fontStyle: "italic"
                          }}>{this.props.time}</h4>
                    </div>
                    
                    <div class="theback">
                        <h4 class="secondtext">{this.props.desc}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectsWidecard