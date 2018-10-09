import React, { Component } from 'react';
import { Col, Card, CardTitle, Badge } from 'react-materialize';
import './About.css';

class About extends Component {


  render() {

    return (
      <div className="myCard">
       <div className="myCard" >
          <img className="myImg" src={require("./just-a-design-geek-icon.png")} />
          <p>Nicolas Lavezzari</p>
        </div>
        <div className="alignGit">
          <img className="myImg2" src={require("./github-mark.png")} />
          <a href='https://github.com/lavezzari' target="blank">Go to GitHub</a>
        </div>
      </div>

    );
  }
}

export default About;
