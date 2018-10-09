import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class NavBar extends Component {

  render() {

    return (
      <div className="NavBar">

        <Navbar brand='Nico´s app' right className="red">
          <NavItem href="/home">Home</NavItem>
          <NavItem href="/lookFor">Users</NavItem>
          <NavItem href="/about">About Us</NavItem>
        </Navbar>

      </div>
    );
  }
}
export default NavBar;


