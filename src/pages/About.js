import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">About <span className="text-danger">Contact</span> Manager</h1>
        <p className="lead">Simple App to manage contacts</p>
        <p className="text-secondary">Version 1.0.0</p>
      </div>
    )
  }
}

export default About;