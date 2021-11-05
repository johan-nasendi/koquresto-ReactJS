import React, { Component } from 'react'

export default class Show extends Component {
    render() {
        let modelSyle = {
            display : 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',
        }
        return (
            <div class="modal show fade" style={modelSyle} >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title"> {this.props.title} </h5>
                  <button type="button" class="btn-close" onClick={this.props.hide}></button>
                </div>
                <div class="modal-body">
                    <img src={this.props.thumbnail} className="img-fluid"/>
                  <p>{this.props.description}</p>
                  <p>{this.props.content}</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
