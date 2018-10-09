import React, { Component } from 'react';
import { Footer } from 'react-materialize';

class My_Footer extends Component {

  render() {

    return (
      <div className="My_Footer">

        <Footer copyrights="Nicolas Lavezzari 2018"
          className='black'>
        </Footer>;
        
      </div>
    );
  }
}

export default My_Footer;


